import MyComponent from "./MyComponent";

const MyChildComponent2 = (props) =>
{
    console.log("props from mychildComponent2: ", props)

    return <div>
        <h3>This is my child componrnt2</h3>
        <label>Parent Counter: {props.counter}</label>
    </div>
    
}
export default MyChildComponent2