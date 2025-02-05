import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from 'axios';

const SignUp = () => {
    const [input, setInput] = useState("");
    const [isSignUp, setIsSignup] = useState(false);
    const [message, setMessage] = useState("");
    const nav = useNavigate();

    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleLogin = async (e) => {
        e.preventDefault();

         // Prepare the data to be sent to the backend
         const userData = {
            input: {
                username: input.username, // This should match the backend 'username'
                password: input.loginpassword // This should match the backend 'password'
            }
        };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('https://auction-titans-backend.onrender.com/login', userData);
            if (response.status === 200) {
                setMessage("Login successful!");
                // Redirect to Home page
                nav("/Home", {replace: true});
            }
            console.log(response.data); // Log the response from the server
        } catch (error) {
            setMessage(error.response ? error.response.data.message : "An error occurred");
            console.error(error); // Log any error that occurs
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the backend
        const userData = {
            input: {
                username: input.signupusername, // This should match the backend 'username'
                teamname: input.teamname, // This should match the backend 'teamname'
                password: input.password // This should match the backend 'password'
            }
        };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('https://auction-titans-backend.onrender.com/signup', userData);
            setMessage(response.data.message);
            console.log(response.data); // Log the response from the server
        } catch (error) {
            setMessage(error.response ? error.response.data.message : "An error occurred");
            console.error(error); // Log any error that occurs
        }

    }
    return (
        <>
            <h3>Existing user? Login Below</h3>
            <form onSubmit={handleLogin}>
                <input type="text" value={input.username} onChange={(e) => handleInput(e)} name="username" placeholder="Enter your username" /><br />
                <input type="password" value={input.loginpassword} onChange={(e) => handleInput(e)} name="loginpassword" placeholder="Enter your password" /><br />
                <button>Login</button>
            </form>
            <button onClick={() => { setIsSignup(!isSignUp) }}>New Users, Click here to Sign up</button>
            {isSignUp && (<form onSubmit={handleSignup}>
                <input type="text" value={input.signupusername} onChange={(e) => handleInput(e)} name="signupusername" placeholder="Set your username" /><br />
                <input type="text" value={input.teamname} onChange={(e) => handleInput(e)} name="teamname" placeholder="Set your team name" /><br />
                <input type="password" value={input.password} onChange={(e) => handleInput(e)} name="password" placeholder="Set your password" /><br />
                <button>Sign Up</button>
            </form>
        )}
        {message && <p>{message}</p>}
        </>
    )
}

export default SignUp;