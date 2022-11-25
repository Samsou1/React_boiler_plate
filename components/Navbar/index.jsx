import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai';
import { userAtom } from '../../store/user';
import LogoutButton from '../LogoutButton';

const Navbar = () => {
  const user = useAtomValue(userAtom);
  return (
    <header>
      <nav className="navbar">
        <ul className="navbarItems">
          <li><Link className="link" to='/' >Home</Link></li>
          <li><Link className="link" to='/about' >About</Link></li>
          <li><Link className="link" to='/login' >Log in</Link></li>
          <li><Link className="link" to='/register' >Register</Link></li>
          <LogoutButton/>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar