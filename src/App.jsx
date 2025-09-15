import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componentes/header/Header'
import Home from './componentes/home/Home'
import DetalleProductos from './componentes/productos/DetalleProductos'
import Registro from './componentes/registro_login/Registro'
import Login from './componentes/registro_login/Login'
import Footer from './componentes/footer/Footer'

function App() {

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Registro' element={<Registro/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/DetalleProductos/:id' element={<DetalleProductos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
