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

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route element={<PrivateRoute />}>
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App
