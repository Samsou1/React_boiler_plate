import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import APIManager from "../../services/api"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const [_, setUser] = useAtom (userAtom)

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
    const data = {
      user: {
          email: email,
          password: password
      }
  }
  
    try {
      const response = await APIManager.register(data);
      setUser(response.data.user)
      console.log(response)
    } catch(err) {
  console.error(err)
    }
    
  
  }
  
    return (
      <>
      <h1 className="title-form">Sign Up</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <label htmlFor="email">Email </label>
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
    )
  }
  

export default Register