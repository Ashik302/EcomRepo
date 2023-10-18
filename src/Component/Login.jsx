import { useState } from "react";
import { Link } from "react-router-dom";
import "./All.css"
import { auth } from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigator = useNavigate()
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        setEmail(e.target.Email.value)
        setPassword(e.target.Password.value)
        signInWithEmailAndPassword(auth, email, Password)
            .then(async(data) => {
                console.log(data, "authdata")
                
                navigator("/")
            })
            .catch((error) => alert(error))
    }

    return (
        <>
            <div className="container">
                <div className="form-container" id="login-form">
                    <h1 className="h1">Login</h1>
                    <form className="form" onSubmit={(e) => handleLogin(e)}>

                        <label className="label" htmlFor="username">Email</label>
                        <input
                        className="input"
                            type="Email"
                            id="username"
                            name="Email" required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="label" htmlFor="password">Password</label>
                        <input
                        className="input"
                            type="password"
                            id="password"
                            name="Password" required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="button" type="submit" >Login</button>
                    </form>
                    <p className="p">Don't have an account? <Link className="a" to="/sign_in" id="signup-link">Sign up</Link></p>
                </div>
            </div>

        </>
    )
}
export default Login;