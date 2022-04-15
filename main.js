// A main.js file that contains all DOM related JavaScript.
// query selector variables go here 👇
var bodyInput = document.querySelector("#body-input");
var ideasContainer = document.querySelector(".ideas-container")
var ideaCards = ideasContainer.getElementsByClassName('idea-card');
var saveButton = document.querySelector(".save-button");
var showStarred = document.querySelector(".starred-button");
var titleInput = document.querySelector("#title-input");

// Global variables 👇
var savedIdeas = [];
var currentIdea;

// event listeners go here 👇
showStarred.addEventListener('click', showStarredIdeas);
saveButton.addEventListener('click', function(event) {
  event.preventDefault()
  displayIdeaCard()
  resetForm()
}, true);

titleInput.addEventListener('keyup', handleKeyup);
bodyInput.addEventListener('keyup', handleKeyup);

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

function displayIdeaCard() {
  currentIdea = new Idea(titleInput.value, bodyInput.value);
  savedIdeas.push(currentIdea);
  ideasContainer.appendChild(generateIdeaCardHTML());
  setCardEventHandler()
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
      for (i = 0; i < ideaCards.length; i++) {
        var ideaContent = ideaCards[i].querySelector(".card-content");
        var title = ideaContent.querySelector("#current-title");
        var body = ideaContent.querySelector("#current-body");
        var txtValue = title.innerText + body.innerText;
        if (txtValue.indexOf(filter) > -1) {
            ideaCards[i].style.display = "";
        } else {
            ideaCards[i].style.display = "none";
        }
    }
}

function showStarredIdeas() {
  console.log(ideaCards);
  if (showStarred.textContent.includes('Show Starred Ideas')) {
    showStarred.textContent = 'Show All Ideas';
    for (var i = 0; i < savedIdeas.length; i++) {
      var idsMatch = savedIdeas[i].id == ideaCards[i].id
      if (idsMatch && !savedIdeas[i].star) {
        ideaCards[i].style.display = "none";
      }
    }
  } else if (showStarred.textContent.includes('Show All Ideas')) {
    showStarred.textContent = 'Show Starred Ideas';
    for (var i = 0; i < ideaCards.length; i++) {
      ideaCards[i].style.display = "";
    }
  }
}
