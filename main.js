var saveButton = document.querySelector('.save-button')
var titleInput = document.querySelector('#title-input')
var bodyInput = document.querySelector('#body-input')
var ideasContainer = document.querySelector('.ideas-container')

var formData = {title: '', body: ''}
var savedIdeas = []

titleInput.addEventListener('keyup', handleTitleChange);
bodyInput.addEventListener('keyup', handleBodyChange);
saveButton.addEventListener('click', saveIdea);

function handleTitleChange(e){
  formData.title = e.target.value;
  handleButtonState()
}

function handleBodyChange(e){
  formData.body = e.target.value;
  handleButtonState()
}

function handleButtonState(){
  if (formData.title && formData.body) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function saveIdea(e){
  e.preventDefault()
  var newIdea = new Idea(formData.title, formData.body)
  savedIdeas.push(newIdea)
  resetForms();
  handleButtonState()
  rerenderIdeasSection()
}

function resetForms(){
  formData.title = '';
  formData.body = '';
  titleInput.value = '';
  bodyInput.value = '';
}

function rerenderIdeasSection(){
  ideasContainer.innerHTML = '';
  for (var i = 0; i < savedIdeas.length; i++) {
    var newIdeaDIV = generateIdeaCardHTML(savedIdeas[i], i)
    ideasContainer.appendChild(newIdeaDIV)
  }
}

function generateIdeaCardHTML(idea, i) {
  var currentIdeaDIV = document.createElement('div')
  currentIdeaDIV.setAttribute('id', idea.id)
  currentIdeaDIV.setAttribute('class', 'idea-card')
  var starActive = ''
  if (idea.star) {
    starActive="-active"
  }

  currentIdeaDIV.innerHTML = `
    <div class="card-header">
      <img src="assets/star${starActive}.svg" alt="star" class="icon star" />
      <img src="assets/delete.svg" alt="delete" class="icon delete" />
    </div>
    <div class="card-content" id="card-content">
      <h3 id="current-title">${idea.title}</h3>
      <p id="current-body">${idea.body}</p>
    </div>
    <div class="card-footer">
      <img src="assets/comment.svg" alt="comment" class="icon" />
      <h4>Comment</h4>
    </div>
  `
  currentIdeaDIV.addEventListener('click', function(e){
    if (e.target.classList.contains('delete')) {
      savedIdeas.splice(i,1);
      rerenderIdeasSection();
    }
    if (e.target.classList.contains('star')) {
      idea.updateIdea();
      rerenderIdeasSection();
    }
  });
  return currentIdeaDIV;
}
