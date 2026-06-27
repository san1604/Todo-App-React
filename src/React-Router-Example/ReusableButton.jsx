const ReusableButton = (props) =>
{
    console.log("Message: ", props.message)
    console.log("onButtonClick: ", props.onButtonClick)
    function clickMe(){
        alert("The button is clicked! Bravo!")
    }
    return <button onClick={()=> props.onButtonClick ? props.onButtonClick() : clickMe()}>Click Me</button>
}
export default ReusableButton