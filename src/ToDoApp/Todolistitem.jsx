// const Todolistitem = (props) => 
// {
//     return <li key={props.index}>
//                 <div class={props.todoTemp.todopriority=="High"?"todoListItem-highpriority":props.todoTemp.todopriority=="Medium"?"todoListItem-mediumpriority": "todoListItem"}>
//                     <div class="completionStatus">
//                       <input type="checkbox" onClick={() => props.onTodoCompleted(props.todoTemp.id)}/>
//                     </div>
//                     <div class="todoDataCard" onClick={() => props.handleTodoUpdateOpen(props.todoTemp.id)} >
//                       <label class="title" onClick={() => props.handleTodoUpdateOpen(props.todoTemp.id)} >{props.todoTemp.name}</label><br/>
//                       <label class="description" onClick={() => props.handleTodoUpdateOpen(props.todoTemp.id)} >{props.todoTemp.desc}</label><br/>
//                       <div class="date" onClick={() => props.handleTodoUpdateOpen(props.todoTemp.id)}>
//                         <label class="creationdate">{new Date(props.todoTemp.todoCreationdate).toLocaleDateString()}</label>
//                         <label class="duedate">{props.todoTemp.duedate}</label><br/>
//                       </div>
//                     </div>
//                 </div>
//               </li>
// }
// export default Todolistitem