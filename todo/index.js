var root = document.getElementById('root')

var todoList = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  var value = input.value

  if (value === '') return

  addTodo(value)
  saveTodo(value)

  input.value = ''
})

var input = document.createElement('input')
input.setAttribute('placeholder', 'Todo')
input.setAttribute('name', 'todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = 'Add'

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)

function addTodo (value) {
  var li = document.createElement('li')

  li.textContent = value

  todoList.appendChild(li)

  var deleteIcon = deleteIconGenerator()

  li.appendChild(deleteIcon)
}

function deleteIconGenerator () {
  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'
  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '10px'
  deleteIcon.style.cursor = 'pointer'

  deleteIcon.addEventListener('click', function (e) {
    e.target.parentElement.remove()
    removeTodo(e.target.parentElement.firstChild.textContent)
  })

  return deleteIcon
}

function getTodos () {
  var todos = sessionStorage.getItem('todos')

  return todos ? JSON.parse(todos) : []
}

function saveTodo (value) {
  var todos = getTodos()

  todos.push(value)

  saveTodos(todos)
}

function saveTodos (todos) {
  var todosString = JSON.stringify(todos)
  sessionStorage.setItem('todos', todosString)
}

function removeTodo (value) {
  var todos = getTodos()

  var newTodos = todos.filter(function (el) {
    return el !== value
  })

  saveTodos(newTodos)
}

function loadTodos () {
  var todos = getTodos()

  todos.forEach(function (todo) {
    addTodo(todo)
  })
}

loadTodos()
