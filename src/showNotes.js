import { todoFactory } from "./todoFactory"
import { newTodo } from "./newTodo"
export const showNotes = () => {
    
    var coll = document.getElementsByClassName("collapsible");

    var i;

for (i = 0; i < coll.length; i++) {
 
  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    
    var thisNotes = this.children.item(2);
    if (thisNotes.style.display === "block") {
      thisNotes.style.display = "none";
    } else {
      thisNotes.style.display = "block";
    }
  });

}

}