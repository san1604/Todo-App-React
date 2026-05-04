// const MyComponent = () =>
// {
//     return <h1>Hello SkillWerse</h1>
// }
// export default MyComponent;

import React from "react";

class MyComponent extends React.Component
{
    state= {incrementCounter:0}
    constructor(props)
    {
        console.log("Consturctor from mycomponent");
        
        super(props)
    }
    incrementMyCounter = () => 
    {
        this.setState({incrementCounter:  this.state.incrementCounter+1})
    }
    ResetMyCounter = () => 
    {
        this.setState({incrementCounter:  this.state.incrementCounter = 0})
    }
    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps from myComponent");
        
    }

    componentDidMount()
    {
        console.log("componentDidMount from myComponent");
        console.log("--------------------------");
    }
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate from My Component");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getSnapshotBeforeUpdate from My Component");
        console.log("prevProps: ",prevProps)
        console.log("prevState: ",prevState)
        console.log("props: ", this.props);
        console.log("state: ", this.state);
        
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate from My Component");
        
    }
    render()
    {
        console.log("Render from My Component");
        
    return <div>
    <h1 onClick={() => this.props.clickEvent()} style={{color: this.props.color}}>This is my Heading tag</h1><br></br>
    <label>This is my counter: {this.state.incrementCounter}</label><br></br>
    <button onClick={() => this.incrementMyCounter()} > Increment Me</button>
    <button onClick={() => this.ResetMyCounter()} > Reset Me</button>
    </div>
    }
}
export default MyComponent;