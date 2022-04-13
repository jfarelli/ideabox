
// saveToStorage* - only used for extensions (should only have one job which is to save the instance to storage)
// deleteFromStorage* - only used for extensions

 class Idea {
   constructor(title, body) {
     this.id = Date.now();
     this.title = title;
     this.body = body;
     this.star = false;
   }

   updateIdea() {
  // updateIdea (should update the idea’s starred state
  //bang operator flips boolean, but you have to assing the property to the opposite of the current property value.
    this.star = !this.star;
   }
 }
