import { useState } from 'react'
import APIManager from "../../services/api";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: email,
        password: password
      },
    };
    try {
      await APIManager.loginUser(data);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="title-form">Login</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <label htmlFor="username">Email </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          id="password"
          placeholder="password"
        />

        <button>Sign Up</button>
      </form>
    </>
  );
}


export default Login