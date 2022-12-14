import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Resetpassword from './pages/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/resetpassword' element={<Resetpassword />} />
          <Route element={<PrivateRoute />}>

          </Route>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
