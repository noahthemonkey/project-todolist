import { todoFactory } from "./todoFactory"
import { newTodo } from "./newTodo"
export const showNotes = () => {
  
    var coll = document.getElementsByClassName("shownotes");

    var i;

    const onClick = function() {
      console.log(this.parentElement.className)
      const selectedNote = this.parentElement.classList
      selectedNote.toggle('active')
    
      var thisNotes = this.parentElement.parentElement.children.item(2);
      if (thisNotes.style.display === "block") {
        thisNotes.style.display = "none";
        thisNotes.style.maxHeight = "0";
        console.log('close')
      } else {
        thisNotes.style.display = "block";
        console.log('open')
        
      }
    }
    
    for (i = 0; i < coll.length; i++) {
      coll[i].onclick = onClick
    }

}
window.onload = () => {
  showNotes();
};