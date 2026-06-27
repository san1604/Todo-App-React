import { createContext, useContext, useState } from "react";

const MultiComponent = () => {
    return <Component1/>
}
export default MultiComponent
var UserContext = createContext();
function Component1 ()
{
    const [user,setUser] = useState("Jesse Hall")

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user = {user}/>
        
        </UserContext.Provider>
    )
}
function Component2 ()
{
    // const [user,setUser] = useState("Jesse Hall")

    return (
        <>
            {/* <h1>{`Hello ${user}!`}</h1> */}
            <h1>Component 2</h1>
            <Component3  />
        
        </>
    )
}
function Component3 ()
{
    // const [user,setUser] = useState("Jesse Hall")

    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        
        </>
    )
}
function Component4 ()
{
    // const [user,setUser] = useState("Jesse Hall")

    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        
        </>
    )
}
function Component5 ()
{
    // const [user,setUser] = useState("Jesse Hall")
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again`}</h2>
        
        </>
    )
}
// function Component1 ()
// {
//     const [user,setUser] = useState("Jesse Hall")

//     return (
//         <>
//             <h1>{`Hello ${user}!`}</h1>
//             <Component2 user = {user}/>
        
//         </>
//     )
// }
// function Component2 ({user})
// {
//     // const [user,setUser] = useState("Jesse Hall")

//     return (
//         <>
//             {/* <h1>{`Hello ${user}!`}</h1> */}
//             <h1>Component 2</h1>
//             <Component3 user = {user}/>
        
//         </>
//     )
// }
// function Component3 ({user})
// {
//     // const [user,setUser] = useState("Jesse Hall")

//     return (
//         <>
//             <h1>Component 3</h1>
//             <Component4 user = {user}/>
        
//         </>
//     )
// }
// function Component4 ({user})
// {
//     // const [user,setUser] = useState("Jesse Hall")

//     return (
//         <>
//             <h1>Component 4</h1>
//             <Component5 user = {user}/>
        
//         </>
//     )
// }
// function Component5 ({user})
// {
//     // const [user,setUser] = useState("Jesse Hall")

//     return (
//         <>
//             <h1>Component 5</h1>
//             <h2>{`Hello ${user} again`}</h2>
        
//         </>
//     )
// }