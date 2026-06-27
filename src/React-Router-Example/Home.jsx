import { use, useEffect, useState } from 'react'
import './home.css'
import ReusableButton from "./ReusableButton"
const Home = () =>
{

    const [counter,setCounter] = useState(0)
    const [count,setCount] = useState(0)
    useEffect(() => 
    {
        setTimeout(() => {
            console.log("Timeout!")
        },2000)
    } ,[]);
    useEffect(()=>
    {
        console.log("Counter & count dependency effect")
    }, [counter,count])
    let divStyle = {
        color:"#ff99aa",
        backgroundColor:"#f1ff99"
    }
    function clickMe()
    {
        let message = prompt("Enter your Message")
        alert(message)
    }
    function increment(){
        setCounter(counter+1)
    }
    function incrementcount(){
        setCount(count+1)
    }

    
    return <div className='homeDiv'>
        <h1 style={{color:"#ff22aa",backgroundColor:"#f1ff99"}}>Home</h1>
        <div style={divStyle}>This is an Example of external css</div>
        Counter: {counter}

        <button onClick={() => increment()} >++</button> 
        Count: {count}

        <button onClick={() => incrementcount()} >++</button> 
        <ReusableButton message="user messaged you" onButtonClick = {clickMe} />
    </div>
}
export default Home