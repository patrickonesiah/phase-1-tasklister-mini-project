const taskObject = []

const removeNode = (event) => {
  let currentTaskNumber = taskObject.findIndex( value => parseInt(event.target.parentNode.id) === value.taskID)

  console.log("currentTaskNumber: " + currentTaskNumber)

  taskObject.splice(currentTaskNumber,1)

  event.target.parentNode.remove();
}

const setTextColor = (priorityValue) => {
  let color = ''

  if (priorityValue === 'high') {
    color = '#fc0303'
  } else if (priorityValue === 'medium') {
    color = '#dbc500'
  } else if (priorityValue === 'low') {
    color = '#03fc13'
  }

  return color;
}

const hightToLow = (a, b) => {
  let priorityArray = ["high", "medium", "low"]
  let firstPrio = priorityArray.indexOf(a.priority)
  let secPrio = priorityArray.indexOf(b.priority)
  return secPrio - firstPrio
}

//When user creates a task, an object is created
//This object contains 3 properties
//These properties are task itself, the priorityValue as a number, textColor based on the priorityValue

//Push to add a task
//Find a way to remove that particular element

const createTask = (event) => {
  const inputValue = event.target.querySelector('#new-task-description').value
  const priorityValue = event.target.querySelector('select').value


  const removeButton = document.createElement("button")
  const task = document.createElement("li")

  task.innerHTML = inputValue
  task.style = 'color: ' + setTextColor(priorityValue)
  removeButton.innerHTML = "x"
  task.appendChild(removeButton)
  
  let taskID = Math.floor((1 + Math.random()) * 0x10000)
  task.id = taskID


  taskObject.push({
    "task": task,
    "priority": priorityValue,
    "taskID": taskID
  })



  taskObject.sort(hightToLow);
  for (const index in taskObject) {
    document.querySelector("#tasks").appendChild(taskObject[index].task)
  }
  removeButton.addEventListener("click", removeNode)
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    createTask(event)


  });
});



// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM


