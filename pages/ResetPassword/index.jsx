import { useState } from 'react'
import APIManager from "../../services/api"
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: email
      }
    }
    try {
      await APIManager.resetPassword(data);
      navigate('/');
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <h1 className="title-form">Reset your password</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <label htmlFor="email">Email </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="email"
        />
        <button>Reset password</button>
      </form>
    </>
  )
}

export default ResetPassword