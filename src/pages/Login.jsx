import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/');
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit = {handleSubmit}>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button>SignIn</button>
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login