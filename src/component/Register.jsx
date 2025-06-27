import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRegisterUserMutation } from "../core/data/redux/Register";

const Register = () => {

    const [registerUser, { isLoading, isError, isSuccess }] = useRegisterUserMutation();

    const navigate = useNavigate();
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);



    if (isLoading) return <p>Registering...</p>;
    if (isError) return <p>Error registering user.</p>;
    if (isSuccess) return <p>Registration successful!</p>;






    const submitFromhundeler = async (e) => {
        e.preventDefault();
        const submitData = new FormData(e.target);

        try {
            const response = await registerUser({
                name: submitData.get("name"),
                email: submitData.get("email"),
                password: submitData.get("password"),
            }).unwrap();
            console.log("Registration successful:", response);
        } catch (error) {
            console.error("Registration failed:", error);
        }




    }


    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={submitFromhundeler} >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="name" required  placeholder="Enter Name"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>

            <Link
                to="/register"
                style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "blue",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px"
                }}
            >
                Register
            </Link>
            <br />
            <Link
                to="/login"
                style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "green",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px"
                }}
            >
                Login
            </Link>


        </div>
    );
}

export default Register;