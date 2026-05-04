import react from "react";

class TodoApp extends react.Component
{
    state = {todolist : []}
    addTodo() {
        console.log("Add todo called")
        let todoname = document.getElementById("todoname").value
        console.log(todoname)
        if(!todoname )
        {
            alert("todo cannot be blank")
        }
        else
        {
            // this.todolist.push(todoname)
            this.setState({todolist:[...this.state.todolist,todoname]})
            
            console.log(this.todolist)
            document.getElementById("todoname").value = ""
        }
    }
    render() 
    {

        console.log("Hello Todo App")
        
        return <div>
            <input id="todoname" type="text" placeholder="todo"/>
            <button onClick={ ()=> this.addTodo()}>Add Todo</button>
            <ul id="todolist">
                {
                 this.state.todolist.map((todoTemp)=> {return <li>{todoTemp}</li>})
                }
            </ul>
        </div>
    }
}
export default TodoApp