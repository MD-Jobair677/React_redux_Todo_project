import { Link } from "react-router-dom";
import {useLoginUserMutation} from "../core/data/redux/Register"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../core/data/redux/authSlice";

// import { useEffect } from "react";

const Login = () => {
 const dispatch = useDispatch();
const navigate = useNavigate()
    const [loginData, {isLoading, isError, isSuccess }] = useLoginUserMutation();


    // useEffect(()=>{
    //     if(isSuccess){
    //     navigate("/todo/list");
    //     }


    // })



       if (isLoading) return <p>Registering...</p>;
    if (isError) return <p>Error login user.</p>;
    if (isSuccess) return <p>login successful!</p>;


const submitFromhundeler = async(e) =>{
    e.preventDefault()


    const userData = new FormData(e.target);

    const submitData = {
    email: userData.get("email"),
    password: userData.get("password"),
  };

  
  if(submitData){
    const response  =  await loginData(submitData).unwrap()
    
   
 if (response.status === true) {
      
           // Redux store & localStorage-এ token এবং user সেভ করো
        dispatch(
          setCredentials({
            token: response.token,
            user: response.userData,
          })
        );

        // লগইন সাকসেস হলে রিডিরেক্ট করো
        navigate("/todo/list");;
       
      }



  }else{
    console.log('erorr')
  }

}

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submitFromhundeler}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required  placeholder="Enter Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required />
                </div>
                <button type="submit">Login</button>
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

export default Login;