import react, { useState } from "react";
import "./todoapp.css";
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
class TodoApp extends react.Component {
  // count = 0
  state = {
    todolist: [],
    isOpen: false,
    inputValue: "",
  };
  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });
  addTodo() {
    const { isOpen, todolist } = this.state;
    // const [isOpen, setIsOpen] = useState(false);
    console.log("Add todo called");
    let todoname = document.getElementById("todoname").value;
    // let todoId = count++
    let todoDescription = document.getElementById("todoDescription").value;
    let todoDueDate = document.getElementById("tododuedate").value;
    let todoCompletionStatus;
    let todoStatus;
    let todoPriority;
    let todoCreationDate;
    let todoUpdationDate;

    console.log(todoname);
    if (!todoname) {
      alert("todo cannot be blank");
    } else {
      let todoData = {
        name: todoname,
        desc: todoDescription,
        duedate: todoDueDate,
      };
      // this.todolist.push(todoname)

      this.setState(
        {
          todolist: [...this.state.todolist, todoData],
          isOpen: false,
        },
        () => {
          // This code runs ONLY after the state has finished updating
          console.log("Updated list:", this.state.todolist);
        },
      );

      console.log(this.state.todolist);
      document.getElementById("todoname").value = "";
    }
  }
  render() {
    console.log("Hello Todo App");

    return (
      <div>
        <button onClick={this.handleOpen}>Add Todo</button>

        {this.state.isOpen && (
          <div className="dailog-box">
            <p>Hello! Todo</p>
            <label>Enter todo name</label>
            <br />
            <input id="todoname" type="text" placeholder="todo" />
            <br />
            <label>Enter todo Description</label>
            <br />
            <input
              type="text"
              id="todoDescription"
              placeholder="Description..."
            />
            <br />
            <label>Todo Due Date</label>
            <br />
            <input type="date" id="tododuedate" /><br /> 
            <label for="">ToDo Priority</label><br/>
            <select id="todoPriority" >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select><br/><br/>
            <input id="todocompletionStatus" type="checkbox" />
            <label >Completed</label><br/>

            <button onClick={() => this.addTodo()}>Add Todo</button>
            <button onClick={this.handleClose}>Cancel</button>
            {/* <button onClick={this.handleClose} >Add Todo</button> */}
          </div>
        )}
        <ul id="todolist">
          {this.state.todolist.map((todoTemp, index) => {
            return (
              <li key={index}>
                {todoTemp.name}: {todoTemp.desc}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
