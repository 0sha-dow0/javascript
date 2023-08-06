const form = document.getElementById("form")
const input = document.getElementById("input")
const todos = document.getElementById("todolist")

const getTodoFromLocalStorage = JSON.parse(localStorage.getItem("todolist"))
function intialcheck(){
    if(getTodoFromLocalStorage){
        getTodoFromLocalStorage.forEach((todo)=>{
            console.log(todo)
            const value = todo.text
            const done = todo.done
            const todosEle = document.createElement("li")
            todosEle.innerText=value
            todos.appendChild(todosEle)
            if (todo &&  done){
            todosEle.classList.toggle('done')}
            todosEle.addEventListener("click",()=>{
                todosEle.classList.toggle('done')
                storeToLocalStorage()
            })
            todosEle.addEventListener("contextmenu",(e)=>{
                e.preventDefault()
                todosEle.remove()
                storeToLocalStorage()
    
            })

    
        })
    }  
}




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const todo = input.value
    if(todo){
        const todosEle = document.createElement("li")
        todosEle.innerText=todo

        todosEle.addEventListener("click",()=>{
            todosEle.classList.toggle('done')
            storeToLocalStorage()
        })
        todosEle.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todosEle.remove()
            storeToLocalStorage()

        })
        todos.appendChild(todosEle)
        input.value=""
         storeToLocalStorage()
    }
})

function storeToLocalStorage(){
    const todoEle = document.querySelectorAll("li")

    const todolist = []

    todoEle.forEach((li)=>{
        todolist.push({
            text : li.innerText,
            done : li.classList.contains('done')
        })
    })
    localStorage.setItem('todolist',JSON.stringify(todolist))
}

intialcheck()