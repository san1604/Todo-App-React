import { useState } from "react";

const FormComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} password: ${password}`);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <label >
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <br />
            <label >
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <button>Submit</button>
        </form>
    )
}
export default FormComponent