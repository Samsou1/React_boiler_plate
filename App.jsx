import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoute from './config/PrivateRoute'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
