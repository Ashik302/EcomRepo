import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "./Firebase";
import "./All.css";

const Sign_in = () => {
    const navigator = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const name = e.target.Name.value;
        const userEmail = e.target.Email.value;
        const userPassword = e.target.Password.value;

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(async (data) => {
                console.log(data, "authdata")
                const user = data.user;
                await updateProfile(user, {
                    displayName: name,
                })
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                    })
                    .catch((error) => console.log(error))

                navigator("/")
            })

            .catch((error) => alert(error));
    };

    return (
        <>
            <div className="container">
                <div className="form-container" id="signup-form">
                    <h1 className="h1">Sign Up</h1>
                    <form className="form" onSubmit={(e) => handleSignIn(e)}>
                        <label className="label" htmlFor="username">UserName</label>
                        <input
                            className="input"
                            type="teat"
                            id="username"
                            name="Name"
                            required
                        />
                        <label className="label" htmlFor="username">Email</label>
                        <input
                            className="input"
                            type="Email"
                            id="username"
                            name="Email"
                            required
                        />
                        <label className="label" htmlFor="password">Create Password</label>
                        <input
                            className="input"
                            type="password"
                            id="password"
                            name="Password" // Change "password" to "Password" to match state variable
                            required
                        />
                        <button className="button" type="submit">Sign-up</button>
                    </form>
                    <p className="p">
                        Already have an account? <Link className="a" to="/login" id="login-link">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sign_in;
