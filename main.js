// A main.js file that contains all DOM related JavaScript.
// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var ideasContainer = document.querySelector(".ideas-container")
// var showStarred = document.querySelector(".starred-button");
// we've provided you with some data to work with 👇
var savedIdeas = [];
var currentIdea;

// event listeners go here 👇
// showStarred = document.addEventListener('click', showStarredIdeas);

saveButton.addEventListener('click', function(event) {
  event.preventDefault()
  displayIdeaCard()
  resetForm()
}, true);

titleInput.addEventListener('keyup', handleKeyup);
bodyInput.addEventListener('keyup', handleKeyup);

function displayIdeaCard() {
  currentIdea = new Idea(titleInput.value, bodyInput.value);
  savedIdeas.push(currentIdea);
  ideasContainer.appendChild(generateIdeaCardHTML());
  setCardEventHandler()
}

// event handlers go here 👇
function setCardEventHandler() {
  var ideaCard = document.getElementById(`${currentIdea.id}`)
  ideaCard.addEventListener("click", function(event) {
    for (var i = 0; i < savedIdeas.length; i++) {
      if (event.target.className.includes("star") && savedIdeas[i].id == event.currentTarget.id) {
          return setStar(event.target, savedIdeas[i])
      }
      if (event.target.className.includes("delete") && savedIdeas[i].id == event.currentTarget.id) {
        savedIdeas.splice(i, 1)
        event.currentTarget.remove();
      }
    }
  })
}

function handleKeyup(event) {
  if (titleInput.value && bodyInput.value){
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function resetForm() {
  titleInput.value = null;
  bodyInput.value = null;
  handleKeyup();
}

function setStar(star, savedIdea) {
  savedIdea.updateIdea();
  if (savedIdea.star) {
    return star.src = "assets/star-active.svg";
  } else{
    return star.src = "assets/star.svg";
  }
}

function generateIdeaCardHTML() {
  var currentIdeaDIV = document.createElement('div')
  currentIdeaDIV.setAttribute('id', currentIdea.id)
  currentIdeaDIV.setAttribute('class', 'idea-card')
  currentIdeaDIV.innerHTML = `
  <div class="card-header">
    <img src="assets/star.svg" alt="star" class="icon star" />
    <img src="assets/delete.svg" alt="delete" class="icon delete" />
  </div>
  <div class="card-content" id="card-content">
    <h3 id="current-title">${currentIdea.title}</h3>
    <p id="current-body">${currentIdea.body}</p>
  </div>
  <div class="card-footer">
    <img src="assets/comment.svg" alt="comment" class="icon" />
    <h4>Comment</h4>
  </div>
  `

  return currentIdeaDIV;
}


function filterSearch() {
  var input = document.getElementById("search-box");
  var filter = input.value;
  ideasContainer;
  var ideasCard = ideasContainer.getElementsByClassName('idea-card');
      for (i = 0; i < ideasCard.length; i++) {
        var ideaContent = ideasCard[i].querySelector(".card-content");
        var title = ideaContent.querySelector("#current-title");
        var body = ideaContent.querySelector("#current-body");
        var txtValue = title.innerText && body.innerText;
        if (txtValue.indexOf(filter) > -1) {
            ideasCard[i].style.display = "";
        } else {
            ideasCard[i].style.display = "none";
        }
    }
}


function showStarredIdeas() {
  if (this.star === true) {
  displayIdeaCard();
  showAllIdeas();
  }
}
var showStarred = document.getElementById("starred-button");

showStarred.addEventListener('click', function handleClick() {
  showStarred.textContent = 'Show All Ideas';
});
