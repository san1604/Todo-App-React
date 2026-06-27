
import react, {useState} from "react"
const MyChildComponent = (props) =>
{

    console.log("props from mychildComponent: ", props)
    const [childCounter,setChildCounter] = useState(0)
function incrementChildCounter() {
        setChildCounter(childCounter+1)
    }
    return <div>
        <h2>This is my child componrnt</h2>
        <h1>This is myChildComponent</h1>
        <br/>
        <label>
            parent Counter: {props.counter}
        </label>
        <br/>
        <button onClick={() => incrementChildCounter()}>Increment Child Counter</button>
        <br/>
        <button onClick={() => props.getChildData(childCounter)}>Send to Parent</button>
        <br/>
    </div>
}
export default MyChildComponent