const removeNode = (event) => {
  console.log('remove' + event)
  event.target.parentNode.remove();
}

const createTask = (event) =>{
  const removeButton = document.createElement("button")
  const task = document.createElement("li")

  task.innerHTML = event
  removeButton.innerHTML = "x"
  task.appendChild(removeButton)

  console.log(document.querySelector("#tasks").appendChild(task))

  removeButton.addEventListener("click", removeNode)
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    createTask(event.target.querySelector('#new-task-description').value)


  });



//   A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM



 
  //tasks
});
