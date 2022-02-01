import './App.css'
import React from 'react'
import {useParams, Routes, Route, Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Main } from './routes/Main';
import { AddIngresoEgreso } from './routes/AddIngresoEgreso';
import { getPrices } from './Services/getPrices';
import { AddCuenta } from './routes/AddCuenta';



function App() {
  const [prices, setPrices] = React.useState('')
  React.useEffect(()=>{
    getPrices().then(p => setPrices(p))
  },[])
  return (
    <div className="App">
      <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}>
            <Link to="/main" >Main</Link>
            <Link to="AddGasto" > AddGasto </Link>
            <Link to="AddCuenta">Add Cuenta</Link>
      </nav>
        <Routes>
          <Route path="/main" element={<Main/>}>
            <Route path=':hola' element={<Hola />}/>
            </Route>
          <Route path="/AddGasto" element={<AddIngresoEgreso/>}/>
          <Route path="/AddCuenta" element={<AddCuenta prices={prices}/>}>Add Cuenta</Route>
        </Routes>
        
        <Outlet />
    </div>
  )
}

export default App


const Hola = (params) => {
  const p = useParams()
  return (
    <>
      <p>{p.hola}</p>
    </>
  )
}