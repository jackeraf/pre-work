
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    //Create a variable containing the content of the new to-do
    var item = document.getElementById('todo-input').value
    var text= document.createTextNode(item)
    //Create a variable containing the to-do list.
    var todo_list = document.querySelector("ul.todo-list-items")
    //Create the li container that will keep the todo_text
    var todo_item = document.createElement("li")
    // Insert the text in the li element
    // where appendchild means almost "add inside the previous element"
    todo_item.appendChild(text)
    //Insert the li element in the ul listing
    todo_list.appendChild(todo_item)


  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    var done_list = document.querySelector("ul.done-list-items")

    // Now we'll use the > sign to access and element inside another (the current selected before it)

    var done_todo = document.querySelector("ul.todo-list-items > li")
    // Add the class attribute with the value of "done" to the querySelector element:
    done_todo.setAttribute("class", "done")
    done_list.appendChild(done_todo)
    // where done_todo and the li from todo list to which is referring will can only be accessed 
    //inside that function
  }
  
}
