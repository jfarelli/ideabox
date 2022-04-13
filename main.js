// querySelector
// var searchButton = document.querySelector(".search-button");
var ideaTitle = document.getElementById("idea-title");
var ideaBody = document.getElementById("body-title");
// var clearTitle = document.querySelector("#idea-title");
// var clearBody = document.querySelector("#body-title");
var saveIdeaButton = document.getElementById("save-button");




// delete input-form after hitting save button
var formInput = document.getElementById('idea-form');

formInput.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  formInput.reset();
});


// disable save button (w/ lighter color & no pointer) when no input in Title or Body
ideaTitle.addEventListener('keyup', handleKeyup);
ideaBody.addEventListener('keyup', handleKeyup);

function handleKeyup(event) {
  if (ideaTitle.value && ideaBody.value){
    saveIdeaButton.disabled = false;
  } else {
    saveIdeaButton.disabled = true;
  }
}








// still working on the saveIdea function
// function saveIdea(title, body) {
//   event.preventDefault();
//   var savedIdeaCard = new Idea(title, body);
//   title.push(savedIdeaCard.title);
//   body.push(savedIdeaCard.body);
//
//   return savedIdeaCard;
// }
