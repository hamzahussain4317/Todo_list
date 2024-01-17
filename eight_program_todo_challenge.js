const todos = [{
    title: 'Wake up',
    completed: true
}, {
    title: 'Have BreakFast',
    completed: false
}, {
    title: 'Go To Office',
    completed: true
}, {
    title: 'Get a Coffee',
    completed: false
}, {
    title: 'Car Modification',
    completed: true
}]
const add_ele = function (todos) {
    document.querySelector('#todos1').innerHTML = ''
    todos.forEach(function (item, index) {
        let newtodo = document.createElement('p')
        newtodo.textContent = item.title
        document.querySelector('#todos1').appendChild(newtodo)
    })
}
add_ele(todos)


const todos_remaining = function (todosr) {
    const narr = todosr.filter(function (item, index) {
        return item.completed === false;
    })
    document.querySelector('#head2').innerHTML = ''
    let anotherheading = document.createElement('h1')
    anotherheading.textContent = `You have ${narr.length} todos left`
    document.querySelector('#head2').appendChild(anotherheading)
}

todos_remaining(todos)


const filterobj = {
    text: '',
    task_completed: false
}

const render_todos = function (todos, filterobj) {
    let filter_todo_array = todos.filter(function (item, index) {
        return item.title.toLowerCase().includes(filterobj.text.toLowerCase())
    })

    filter_todo_array = filter_todo_array.filter(function (item, index) {

        if (filterobj.task_completed) {
            return !item.completed
        }
        else {
            return true
        }

    })
console.log(filter_todo_array.length)


    document.querySelector('#todos1').innerHTML = ''

    todos_remaining(filter_todo_array)

    filter_todo_array.forEach(function (item, index) {
        let another_todo = document.createElement('p')
        another_todo.textContent = item.title
        document.querySelector('#todos1').appendChild(another_todo)
    })

}


render_todos(todos, filterobj);

document.querySelector('#render-todos').addEventListener('input', function (e) {
    filterobj.text = e.target.value
    render_todos(todos, filterobj)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    //prevent the default behavior of the web
    e.preventDefault()
    //e.target means when we click submit button
    //then element of name todoname k andar kch value hai
    //wo hamare new todo k title mein store hojae 

    todos.push({
        title: e.target.elements.todoname.value,
        completed: false
    })
    e.target.elements.todoname.value = ''
    console.log(todos)
    add_ele(todos)
    todos_remaining(todos)
})

document.querySelector('#checking').addEventListener('change', function (e) {
    filterobj.task_completed = e.target.checked
    console.log(e.target.checked)
    render_todos(todos, filterobj)

})