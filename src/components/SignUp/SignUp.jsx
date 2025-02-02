import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const [input, setInput] = useState("");
    const [isSignUp, setIsSignup] = useState(false);
    const nav = useNavigate();

    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (input.username && input.password) {
            nav("/Home");
        }
    }

    const handleSignup = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <h3>Existing user? Login Below</h3>
            <form onSubmit={handleLogin}>
                <input type="text" value={input.username} onChange={(e) => handleInput(e)} name="username" placeholder="Enter your username" /><br />
                <input type="password" value={input.password} onChange={(e) => handleInput(e)} name="password" placeholder="Enter your password" /><br />
                <button>Login</button>
            </form>
            <button onClick={() => { setIsSignup(!isSignUp) }}>New Users, Click here to Sign up</button>
            {isSignUp && (<form onSubmit={handleSignup}>
                <input type="text" value={input.username} onChange={(e) => handleInput(e)} name="username" placeholder="Set your username" /><br />
                <input type="password" value={input.password} onChange={(e) => handleInput(e)} name="password" placeholder="Set your password" /><br />
                <button>Sign Up</button>
            </form>)}
        </>
    )
}

export default SignUp;