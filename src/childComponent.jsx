import React from "react";
import App from "./App";

class ChildComponent extends React.Component
{
    render()
    {
        return <div style={{color:"red"}}>Child Component</div>
    }
    componentWillUnmount()
    {
        console.log("Child Component Unmounted");
        
    }
}
export default ChildComponent