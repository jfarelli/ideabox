// A main.js file that contains all DOM related JavaScript.
// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");
var ideasContainer = document.querySelector(".ideas-container")

// we've provided you with some data to work with 👇
var savedIdeas = [];
var currentIdea;

// event listeners go here 👇
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
  ideasContainer.appendChild(generateIdeaCardHTML())
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

function generateIdeaCardHTML() {
  var currentIdeaDIV = document.createElement('div')
  currentIdeaDIV.setAttribute('id', currentIdea.id)
  currentIdeaDIV.setAttribute('class', 'idea-card')
  currentIdeaDIV.innerHTML = `
  <div class="card-header">
    <img src="assets/star.svg" alt="star" class="icon" />
    <img src="assets/delete.svg" alt="delete" class="icon" />
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
        var txtValue = title.innerText || body.innerText;
        if (txtValue.indexOf(filter) > -1) {
            ideasCard[i].style.display = "";
        } else {
            ideasCard[i].style.display = "none";
        }
    }
}
