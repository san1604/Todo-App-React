import react, { useState } from "react";
import "./todoapp.css";
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
class TodoApp extends react.Component {
  
  
  // toggleDialog = () => this.setState({
  //   ...this.state,isOpen: !this.state.isOpen
  // })
    // setIsOpen(!isOpen);
  // count = 0
  state = {
    todolist: [
      {
        id:1,
        name: "Todo 1",
        desc: "Todo 1 Description",
        duedate: "31/12/2026",
        completionStatus: true,
        status: "In Progress",
        todopriority:"High",
        todoCreationdate: Date.now(),
        todoUpdationdate : Date.now()
      },
      {
        id:2,
        name: "Todo 2",
        desc: "Todo 2 Description",
        duedate: "31/03/2026",
        completionStatus: false,
        status: "To Do",
        todopriority:"Low",
        todoCreationdate: Date.now(),
        todoUpdationdate : Date.now()
      },
      {
        id:3,
        name: "Todo 3",
        desc: "Todo 3 Description",
        duedate: "31/05/2026",
        completionStatus: true,
        status: "In Review",
        todopriority:"Medium",
        todoCreationdate: Date.now(),
        todoUpdationdate : Date.now()
      },
    ],
    isOpen: false,
    dialogTitle:"Add Todo",
    updateTodoObj:{}
  };
  overlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  };
    dialogStyle = {
    backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px'
  };
  handleOpen = () => this.setState({ ...this.state,isOpen: true , dialogTitle:"Add Todo"});

  handleTodoUpdateOpen = (id) => {
    
    let todoObj = this.state.todolist.find(todoTemp => {return todoTemp.id === id})
    console.log(todoObj)
    // document.getElementById("todoname").Value = todoObj.name
    this.setState({ ...this.state,isOpen: true,dialogTitle:"Update Todo" , updateTodoObj:todoObj});
    // todoDescription
    // tododuedate
    // todoPriority
    // todocompletionStatus
    // todoStatus
    // let dialogTitle = document.getElementById("todoDialogTitle")
    // if(dialogTitle)
    // {
    //   dialogTitle.innerText = "Update Todo"
    // }
  }

  handleClose = () => this.setState({ ...this.state,isOpen: false });
  addTodo() {
    const { isOpen, todolist } = this.state;
    // const [isOpen, setIsOpen] = useState(false);
    console.log("Add todo called");
    let todoname = document.getElementById("todoname").value;
    let todoId = this.state.todolist.length+1
    let todoDescription = document.getElementById("todoDescription").value;
    let todoDueDate = document.getElementById("tododuedate").value;
    let todoCompletionStatus = document.getElementById("todocompletionStatus").value
    let todoStatus = document.getElementById("todoStatus").value;
    let todoPriority = document.getElementById("todoPriority").value
    let todoCreationDate = Date.now()
    let todoUpdationDate = Date.now()

    console.log(todoname);
    if (!todoname) {
      alert("todo cannot be blank");
    } else {
      let todoData = {
        id: todoId,
        name: todoname,
        desc: todoDescription,
        duedate: todoDueDate,
        completionStatus: todoCompletionStatus,
        status: todoStatus,
        todopriority:todoPriority,
        todoCreationdate: todoCreationDate,
        todoUpdationdate : todoUpdationDate
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

        <ul class="listStyle" id="todolist">
          {this.state.todolist.map((todoTemp, index) => {
            return (

              <li onClick={() => this.handleTodoUpdateOpen(todoTemp.id)} key={index}>
                <div class={todoTemp.todopriority=="High"?"todoListItem-highpriority":todoTemp.todopriority=="Medium"?"todoListItem-mediumpriority": "todoListItem"}>
                    <div class="completionStatus">
                      <input type="checkbox" />
                    </div>
                    <div class="todoDataCard">
                      <label class="title">{todoTemp.name}</label><br/>
                      <label class="description">{todoTemp.desc}</label><br/>
                      <div class="date">
                        <label class="creationdate">{new Date(todoTemp.todoCreationdate).toLocaleDateString()}</label>
                        <label class="duedate">{todoTemp.duedate}</label><br/>
                      </div>
                    </div>
                </div>
              </li>
            );
          })}
        </ul>
        {this.state.isOpen && (
          <div style={this.overlayStyle}>
            <div style={this.dialogStyle}>
              {/* <h3>Hello!</h3>
              <p>This is a simple dialog box built with React state.</p> */}
              <div className="dailog-box">
                <h2 >{this.state.dialogTitle}</h2>
                <label>Todo Title</label>
                <br />
                <input id="todoname" type="text" placeholder="Enter Todo title here..." value={this.state.updateTodoObj.name? this.state.updateTodoObj.name:""}/>
                <br />
                <label>Todo Description</label>
                <br />
                <input
                  type="text"
                  id="todoDescription"
                  placeholder="Enter Todo Description here..."
                  value={this.state.updateTodoObj.desc?this.state.updateTodoObj.desc:""}
                />
                <br />
                <label>Due Date</label>
                <br />
                <input type="date" id="tododuedate" value={this.state.updateTodoObj.todoDueDate?this.state.updateTodoObj.todoDueDate:""} />
                <br />
                <label >Todo Priority</label>
                <br />
                <select id="todoPriority" value={this.state.updateTodoObj.todopriority?this.state.updateTodoObj.todoPriority:""}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <br />
                <br />
                <input id="todocompletionStatus" type="checkbox" value={this.state.updateTodoObj.todoCompletionStatus?this.state.updateTodoObj.todocompletionStatus:""}/>
                <label>Completed</label>
                <br />
                <label>ToDo Status</label>
                <select id="todoStatus" value={this.state.updateTodoObj.todoStatus?this.state.updateTodoObj.todoStatus:""}>
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>IN Review</option>
                  <option>Done</option>
                </select>
                <br />

                <button onClick={() => this.addTodo()}>
  {this.state.dialogTitle === "Update Todo" ? "Update Todo" : "Add Todo"}
</button>
                <button onClick={this.handleClose}>Cancel</button>
                {/* <button onClick={this.handleClose} >Add Todo</button> */}
              </div>

              {/* <button onClick={this.handleClose}>Close</button> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TodoApp;
