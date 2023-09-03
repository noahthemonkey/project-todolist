import { todoFactory } from "./todoFactory"
import { newTodo } from "./newTodo"

export const showNotes = () => {
  var coll = document.getElementsByClassName("shownotes");
  var i;
  console.log(coll)


  const onClick = function() {
    const selectedNote = this.parentElement.classList;
    selectedNote.toggle('active');
  
    var thisNotes = this.parentElement.parentElement.children.item(3);
    var computedStyle = window.getComputedStyle(thisNotes);
  
    if (computedStyle.display === "none") {
      thisNotes.style.display = "block";
      thisNotes.classList.add('open'); // Add the 'open' class
      thisNotes.style.maxHeight = "0"; // Set initial max height to 0
      thisNotes.style.opacity = "0.3"; // Set initial opacity to 0
      thisNotes.style.transition = "max-height 0.5s ease, opacity 0.5s ease"; // Add transition properties
      thisNotes.offsetHeight; // Trigger reflow to apply transition
      thisNotes.style.maxHeight = "500px"; // Set the desired max height
      thisNotes.style.opacity = "1"; // Set opacity to 1
      this.textContent = "Hide Notes";
      console.log('open');
    } else {
      thisNotes.style.maxHeight = "0"; // Set max height to 0
      thisNotes.style.opacity = "0"; // Set opacity to 0
      thisNotes.style.transition = "max-height 0.5s ease, opacity 0.5s ease"; // Add transition properties
      thisNotes.offsetHeight; // Trigger reflow to apply transition
      setTimeout(() => {
        thisNotes.style.display = "none";
      }, 400); // Delay setting display to "none" by 500 milliseconds
      thisNotes.classList.remove('open'); // Remove the 'open' class
      this.textContent = "Show Notes";
      console.log('close');
    }
  }

  for (i = 0; i < coll.length; i++) {
    coll[i].onclick = onClick;
  }
  
  
}

window.onload = () => {
  showNotes();
  
};