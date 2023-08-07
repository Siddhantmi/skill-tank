import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/home", { state: { id: email } })
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

                <h1 className="login-title">SignUp Form</h1>

                <div className="loginSignupbtn">

                    <div className="btn2"><button ><Link to="/">Login</Link></button></div>
                    <div className="btn1"> <button><Link to="/signup">Signup</Link></button></div>

                </div>

                <form action="POST" className="">
                    <input type="email" className="input-area" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />

                    <input type="password" className="input-area" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />

                    <div className="forgetpass">Forgot Password?</div>

                    <input className="submit" type="submit" onClick={submit} />
                </form>

                <div><p>Not a member? <Link className="signup" to="/">Login Page</Link> </p></div>

            </div>
        </div>
    )
}

export default Login