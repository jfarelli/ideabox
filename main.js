// A main.js file that contains all DOM related JavaScript.
// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title-input");
var bodyInput = document.querySelector("#body-input");


// we've provided you with some data to work with 👇
var savedIdeas = [];
var currentIdea;

// event listeners go here 👇
saveButton.addEventListener('click', function(event) {
  event.preventDefault()
  displayIdeaCard()
}, true);
//true because you want to prevent the default

// functions and event handlers go here 👇
function displayIdeaCard() {
  //In order to create a new instance of idea called currentIdea you have to pass through title and body input values from form.
  currentIdea = new Idea(titleInput.value, bodyInput.value);
  console.log(currentIdea);
  console.log(titleInput.value);
  console.log(bodyInput.value);
  // If I entered information in both the “Title” and “Body” input fields.
  savedIdeas.push(currentIdea);
  // I should see a new Idea instance with the provided title and body appear in the ideas array
  // I should see a new idea card with the provided title and body appear on the DOM
}
