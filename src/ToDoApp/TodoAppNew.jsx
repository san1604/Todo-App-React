import react, { useState } from "react";
import "./todoapp.css";

var TodoAppNew = () =>
{
  const [todoState,setTodoState] = useState({
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
  })
  let overlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  };
  let dialogStyle = {
    backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px'
  };
  let handleOpen = () => setTodoState({ ...todoState,isOpen: true , dialogTitle:"Add Todo"});

  let handleTodoUpdateOpen = (id) => {
    
    let todoObj = todoState.todolist.find(todoTemp => {return todoTemp.id === id})
    console.log(todoObj)
    setTodoState({ ...todoState,isOpen: true,dialogTitle:"Update Todo" , updateTodoObj:todoObj});
  }

  let handleClose = () => setTodoState({ ...todoState,isOpen: false });
  function addTodo() {
    const { isOpen, todolist } = todoState;
    // const [isOpen, setIsOpen] = useState(false);
    console.log("Add todo called");
    let todoname = document.getElementById("todoname").value;
    let todoId = todoState.todolist.length+1
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
      // todolist.push(todoname)

      setTodoState(
        {
          todolist: [...todoState.todolist, todoData],
          isOpen: false,
        },
        () => {
          // This code runs ONLY after the state has finished updating
          console.log("Updated list:", todoState.todolist);
        },
      );

      console.log(todoState.todolist);
      document.getElementById("todoname").value = "";
    }
  }
  function onTodoCompleted(id)
  {

    console.log("onTodoCompleted function clicked",id)

  }

  
    console.log("Hello Todo App");

    return (
      <div>
        <button onClick={handleOpen}>Add Todo</button>

        <ul class="listStyle" id="todolist">
          {todoState.todolist.map((todoTemp, index) => {
            return (

              <li key={index}>
                <div class={todoTemp.todopriority=="High"?"todoListItem-highpriority":todoTemp.todopriority=="Medium"?"todoListItem-mediumpriority": "todoListItem"}>
                    <div class="completionStatus">
                      <input type="checkbox" onClick={() => onTodoCompleted(todoTemp.id)}/>
                    </div>
                    <div class="todoDataCard" onClick={() => handleTodoUpdateOpen(todoTemp.id)} >
                      <label class="title" onClick={() => handleTodoUpdateOpen(todoTemp.id)} >{todoTemp.name}</label><br/>
                      <label class="description" onClick={() => handleTodoUpdateOpen(todoTemp.id)} >{todoTemp.desc}</label><br/>
                      <div class="date" onClick={() => handleTodoUpdateOpen(todoTemp.id)}>
                        <label class="creationdate">{new Date(todoTemp.todoCreationdate).toLocaleDateString()}</label>
                        <label class="duedate">{todoTemp.duedate}</label><br/>
                      </div>
                    </div>
                </div>
              </li>
            );
          })}
        </ul>
        {todoState.isOpen && (
          <div style={overlayStyle}>
            <div style={dialogStyle}>
              {/* <h3>Hello!</h3>
              <p>This is a simple dialog box built with React state.</p> */}
              <div className="dailog-box">
                <h2 >{todoState.dialogTitle}</h2>
                <label>Todo Title</label>
                <br />
                <input id="todoname" type="text" placeholder="Enter Todo title here..." value={todoState.updateTodoObj.name? todoState.updateTodoObj.name:""}/>
                {/* <input id="todoname" type="text" placeholder="Enter Todo title here..." /> */}
                <br />
                <label>Todo Description</label>
                <br />
                <input
                  type="text"
                  id="todoDescription"
                  placeholder="Enter Todo Description here..."
                  value={todoState.updateTodoObj.desc?todoState.updateTodoObj.desc:""}
                />
                <br />
                <label>Due Date</label>
                <br />
                <input type="date" id="tododuedate" value={todoState.updateTodoObj.todoDueDate?todoState.updateTodoObj.todoDueDate:""} />
                <br />
                <label >Todo Priority</label>
                <br />
                <select id="todoPriority" value={todoState.updateTodoObj.todopriority?todoState.updateTodoObj.todoPriority:""}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <br />
                <br />
                <input id="todocompletionStatus" type="checkbox" value={todoState.updateTodoObj.todoCompletionStatus?todoState.updateTodoObj.todocompletionStatus:""} />
                <label>Completed</label>
                <br />
                <label>ToDo Status</label>
                <select id="todoStatus" value={todoState.updateTodoObj.todoStatus?todoState.updateTodoObj.todoStatus:""}>
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>IN Review</option>
                  <option>Done</option>
                </select>
                <br />

                <button onClick={() => addTodo()}>
  {todoState.dialogTitle === "Update Todo" ? "Update Todo" : "Add Todo"}
</button>
                <button onClick={handleClose}>Cancel</button>
                {/* <button onClick={handleClose} >Add Todo</button> */}
              </div>

              {/* <button onClick={handleClose}>Close</button> */}
            </div>
          </div>
        )}
      </div>
    );
  }
export default TodoAppNew