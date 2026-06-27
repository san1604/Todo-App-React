// const MyComponent = () =>
// {
//     return <h1>Hello SkillWerse</h1>
// }
// export default MyComponent;

import React, { useState } from "react";
import MyChildComponent from "./MyChildComponent";
import MyChildComponent2 from "./MyChildComponent2";

// class MyComponent extends React.Component
// {
//     state= {incrementCounter:0}
//     constructor(props)
//     {
//         console.log("Consturctor from mycomponent");
        
//         super(props)
//     }
//     incrementMyCounter = () => 
//     {
//         this.setState({incrementCounter:  this.state.incrementCounter+1})
//     }
//     ResetMyCounter = () => 
//     {
//         this.setState({incrementCounter:  this.state.incrementCounter = 0})
//     }
//     static getDerivedStateFromProps()
//     {
//         console.log("getDerivedStateFromProps from myComponent");
        
//     }

//     componentDidMount()
//     {
//         console.log("componentDidMount from myComponent");
//         console.log("--------------------------");
//     }
//     shouldComponentUpdate()
//     {
//         console.log("shouldComponentUpdate from My Component");
//         return true
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState)
//     {
//         console.log("getSnapshotBeforeUpdate from My Component");
//         console.log("prevProps: ",prevProps)
//         console.log("prevState: ",prevState)
//         console.log("props: ", this.props);
//         console.log("state: ", this.state);
        
//     }
//     componentDidUpdate()
//     {
//         console.log("componentDidUpdate from My Component");
        
//     }
//     render()
//     {
//         console.log("Render from My Component");
        
//     return <div>
//     <h1 onClick={() => this.props.clickEvent()} style={{color: this.props.color}}>This is my Heading tag</h1><br></br>
//     <label>This is my counter: {this.state.incrementCounter}</label><br></br>
//     <button onClick={() => this.incrementMyCounter()} > Increment Me</button>
//     <button onClick={() => this.ResetMyCounter()} > Reset Me</button>
//     </div>
//     }
// }
var MyComponent = (props) =>
{

    // let myObj = {
    //     a:"A",
    //     b:"B"
    // }
    // let myObj2 ={
    //     a:"a",
    //     b:"b"
    // }
    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj2: ", myObj2)
    // console.log("myObj2.a: ", myObj2.a)

    // myObj.a = "1"
    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj2: ", myObj2)
    // console.log("myObj2.a: ", myObj2.a)

    // let myObj3 = myObj
    // console.log("myObj3: ", myObj3)
    // console.log("myObj3.a: ", myObj3.a)

    // console.log("----------")

    // myObj.b = 10

    // console.log("myObj3: ", myObj3)
    // console.log("myObj3.a: ", myObj3.a)
    // console.log("myObj3.b: ", myObj3.b)
    // console.log("myObj: ", myObj)
    // console.log("myObj.a: ", myObj.a)
    // console.log("myObj.b: ", myObj.b)

    // console.log("----------")

    // myObj2 = Object.assign({}, myObj)
    // console.log("myObj:",myObj)
    // console.log("myObj2:",myObj2)

    // myObj.a = 3
    // console.log("myObj:",myObj)
    // console.log("myObj2:",myObj2)

    // console.log("----------")

    // function makeHelloFunction()
    // {
    //     const message = "Hello"
    //     function sayHello()
    //     {
    //         console.log(message)
    //     }
    //     return sayHello

    // }
    // const sayHello = makeHelloFunction()
    // sayHello()

    

    // var myArray = [

    //     1,
    //     "2",
    //     3,
    //     function()
    //     {
    //         console.log("THis is my function from array!!");            
    //     }
    // ]
    // console.log(myArray[3])
    // myArray[3]()
    
    // var myObj = 
    // {
    //     a:"a",
    //     b:"b",
    //     myFunction : function(){
    //         console.log("This is my function from object")
    //     }

    // }
    // console.log(myObj.myFunction)
    // console.log(myObj.myFunction())

    // let myTempFUnction = () => 
    // {
    //     console.log("This is my temp function")

    // }
    // myTempFUnction()
    // console.log(myTempFUnction())

    // function myTempFUnction1()
    // {
    //     console.log("This is my myTempFUnction1")
    // }

    // console.log(myTempFUnction1)
    // console.log(myTempFUnction1())

    // function myTempFUnction2()
    // {
    //     console.log("This is my myTempFUnction2");
    //     return true
        
    // }
    // myTempFUnction2()
    // console.log(myTempFUnction2())
    // IFFE : Immedietly invoked function
    // Self executing function
    // (function(){
    //     console.log("This is myFunc")
    // })()



    // let num = 10
    // console.log("num: ", num);
    // console.log("typeof num: ", typeof num);

    // explicit
    // let strNum = String(num)
    // console.log("strNum: ", strNum);
    // console.log("typeof strNum: ", typeof strNum);

    // implicit
    // let strNum = num+""
    // console.log("strNum: ", strNum);
    // console.log("typeof strNum: ", typeof strNum);
    const [counter,setCounter] = useState(0)
    const [childCounter,setChildCounter] = useState(0)
    console.log("props from myChildComponent: ",props );
    // function incrementChildCounter() {
    //     setChildCounter(childCounter+1)
    // }
    function incrementCounter()
    {
        setCounter(counter+1)
    }
    function getChildData(childCounterTemp)
    {
        console.log("getChildData called in parent ",childCounterTemp );
        setChildCounter(childCounterTemp)
    }


    


    return <div>
        <h1>Hello Parent</h1>
        <br/>
        <button onClick={() => incrementCounter()}>Increment Parent Counter</button>

        <div>
            <MyChildComponent counter = {counter} getChildData={getChildData}/>
        </div>

        <div>
            <MyChildComponent2 counter = {counter}/>
        </div>
        <div>
            <label>Child Counter: {childCounter}</label>
        </div>
    </div>
    
}


export default MyComponent;