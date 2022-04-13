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
//Doesnt re-render the page. Set to true because you want to prevent the default

titleInput.addEventListener("keyup", checkForm)
bodyInput.addEventListener("keyup", checkForm)

// functions and event handlers go here 👇
function checkForm(event) {
	if (titleInput.value && bodyInput.value) {
  	saveButton.disabled = false
  } else {
  	saveButton.disabled = true
  }
}
//eventhandler.

function displayIdeaCard() {
  //Eventhandler. In order to create a new instance of idea called currentIdea you have to pass through title and body input values from form.
  currentIdea = new Idea(titleInput.value, bodyInput.value);

  savedIdeas.push(currentIdea);
  // target the ideas container and append the HTML returned from the generateIdeaCardHTML function
  ideasContainer.appendChild(generateIdeaCardHTML())

}

function generateIdeaCardHTML() {
  //create a parent div element in the DOM
  var currentIdeaDIV = document.createElement('div')
  // set the currentIdea id property as an id attribute on the div we created
  currentIdeaDIV.setAttribute('id', currentIdea.id)
  // set a class attribute of idea-card to style from our CSS
  currentIdeaDIV.setAttribute('class', 'idea-card')
  // once the currentIdeaDIV parent is fully constructed above we inject the innerHTML with the card HTML template.
  // we use object literals to dynamically inject the title and body from the global currentIdea variable that gets set in the displayIdeaCard function
  currentIdeaDIV.innerHTML = `
  <div class="card-header">
    <img src="assets/star.svg" alt="star" class="icon" />
    <img src="assets/delete.svg" alt="delete" class="icon" />
  </div>
  <div class="card-content">
    <h3>${currentIdea.title}</h3>
    <p>${currentIdea.body}</p>
  </div>
  <div class="card-footer">
    <img src="assets/comment.svg" alt="comment" class="icon" />
    <h4>Comment</h4>
  </div>
  `
  // return all the HTML we just constructed
  return currentIdeaDIV;
}

function resetForm() {
  titleInput.value = null
  bodyInput.value = null
}
