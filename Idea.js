// let counter = 0
// can we do this.id = counter++?


class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = ''
    this.body = ''
    this.star = false
    // this.saved = false <-- not sure if this should be a default value?
  }

  updateIdea(){
    //if you hit the 'comment' button, open the form, and allow the user to
    //update the string of the current Idea.
  }
}

/*----- constants -----*/
// id, title, body, and star
/*----- app's state (variables) -----*/
//saved, starred
/*----- cached element references -----*/

/*----- event listeners -----*/
//save, search, delete, star, comment, enter title, enter body, show starred, filter starred ideas

/*----- functions -----*/
//saveToStorage, deleteFromStorage, updateIdea
