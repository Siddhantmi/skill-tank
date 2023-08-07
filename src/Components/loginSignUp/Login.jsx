import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './loginSignup.css'

export default function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }

    return (
       <div className="container">
            <div className="login">

                <h1 className="login-title">Login Form</h1>

                <div className="loginSignupbtn">

                <div className="btn1"><button ><Link to="/">Login</Link></button></div>
            <div className="btn2"> <button><Link to="/signup">Signup</Link></button></div>
                   
                </div>

                <form action="POST" className="">
                    <input type="email" className="input-area" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />

                    <input type="password" className="input-area" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />

                    <div className="forgetpass">Forgot Password?</div>

                    <input className="submit" type="submit" onClick={submit} />
                </form>

                <div><p>Not a member? <Link className="signup"to="/signup">Signup Page</Link> </p></div>

                </div>

            </div>
        
    )
}
