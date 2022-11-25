import APIManager from "../../services/api"
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await APIManager.logoutUser();
      navigate('/');
    }catch(error){
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Log out</button>
    </div>
  )
}

export default LogoutButton;