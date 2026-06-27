import { useState } from "react";

var MyFunctionalComponent = () =>
{
    const [count, setCount] = useState(0)
    function incrementCount()
    {
        console.log("Increment Count Clicked");
        setCount(count+1)
        
    }
    return <div>
        <h1>THis is my functional component</h1>
        <br /><br />
        <label >count is: {count}</label>
        <br />
        <button onClick={() => incrementCount()}>Increment Count</button>
    </div>
}
export default MyFunctionalComponent