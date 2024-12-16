
import './index.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/Header/NavBar'
import Home from './components/home/Home'
import Cart from './components/Cart/Cart'
function App() {
 
  return (
    <>
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
     </Routes>
    </>
  )
}

export default App
