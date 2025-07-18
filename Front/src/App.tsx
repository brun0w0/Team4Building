import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Teambuildings from "./Pages/Teambuildings/Teambuildings"
import Empresas from "./Pages/Empresas/Empresas"
import Nosotros from "./Pages/Nosotros/Nosotros"
import PreguntasFrecuentes from "./Pages/PreguntasFrecuentes/PreguntasFrecuentes"
import Contacto from "./Pages/Contacto/Contacto"
import Error404 from "./Pages/Error404/Error404"
import Registro from "./Pages/Registro/Registro"
import Login from "./Components/Links/Login/Login"
import RegistroEmpresa from "./Pages/RegistroEmpresa/RegistroEmpresa"

function App() {


  return (
    <Routes>
      {/* Rutas normales sin necesidad de sesion iniciada */}
      <Route path="/" element={<Home/>}/>
      <Route path="/teambuildings" element={<Teambuildings/>}/>
      <Route path="/empresas" element={<Empresas/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/register" element={<Registro/>}/>
      <Route path="/login" element={<Login/>}/>

      {/* Rutas que deberian aparecer si solo esta la sesion iniciada */}
      <Route path="/registrarempresa" element={<RegistroEmpresa/>}/>
      

      {/*Rutas a parte */}
      <Route path="*" element={<Error404/>}/>
    </Routes>
  )
}

export default App
