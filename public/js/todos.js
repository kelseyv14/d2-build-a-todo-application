

// Your routes go here...
getTodos()
function getTodos() {
//   var nameInput = document.querySelector('#todos')
fetch('http://localhost:3000/todos', {
    method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
      
})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response)
            loopTodos(response)
        })
}
function loopTodos(todos) {
    console.log(todos)
  todos.forEach(function(todo) {
  showTodos(todo)
  })

}

function showTodos(todo) {
  var todoList = `<li class="list-group-item">${todo.todo}</li>`
  document.querySelector('#todos').innerHTML += todoList;
}
