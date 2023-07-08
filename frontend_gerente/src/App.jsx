import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./layout/Login"
import LayoutGerente from "./layout/LayoutGerente"
import RegistrarAdministrador from "./components/gerente/RegistrarAdministrador"
import Administradores from './components/gerente/Administradores'
import RegistrarSede from './components/gerente/RegistrarSede'
import Sedes from './components/gerente/Sedes'
import Reportes from './components/gerente/Reportes'


const App = () => {
  return (
      <>
         <BrowserRouter>
              <Routes>
                   <Route path="/"  element={<Login/>}/>
                   
                   <Route path="gerente" element={<LayoutGerente/>}>
                        <Route path="reg-administrador" element={<RegistrarAdministrador/>}/>
                        <Route path="administradores" element={<Administradores/>}/>
                        <Route path="reg-sedes" element={<RegistrarSede/>}/>
                        <Route path="sedes" element={<Sedes/>}/>
                        <Route path="reportes" element={<Reportes/>}/>
 
                   </Route>
                  
              </Routes>
         </BrowserRouter>
      </>
  )
}

export default App