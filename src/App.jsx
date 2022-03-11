import './App.css'
import React from 'react'
import {useParams, Routes, Route, Outlet} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Main } from './routes/Main';
import { AddIngresoEgreso } from './routes/AddIngresoEgreso';
import { getPrices } from './Services/getPrices';
import { AddAccount } from './routes/AddAccount';
import { loadInfo, saveInfo } from './Services/apiGet'
import { SeeAccounts } from './routes/SeeAccounts';
import { IngresoEgreso, Account } from './models/Account'



function App() {
  const [prices, setPrices] = React.useState('')
  const [accounts, setAccounts] = React.useState([])
  const egresoIngreso = (account, newIE, typeOfGasto) => {
    let savedAccounts = accounts.map(a => {
      if(a.title == account){
        if(typeOfGasto){
          a.addEgreso(...Object.values(newIE))
        }
        else{
          
          a.addIngreso(...Object.values(newIE))
        }
        return a;
      }
      
      return a;
    })
    saveInfo(savedAccounts)
    setAccounts(savedAccounts)
    
  }
  const addNewAccount = (account) =>{
    
    saveInfo([...accounts, account])
    setAccounts([...accounts, account])
  }
  React.useEffect(()=>{
    
    getPrices().then(p => {setPrices(p)})
    loadInfo(setAccounts)

    console.log("hola")
    
    
  },[])
  
  return (
    
    <div className="min-h-screen bg-green-900 flex flex-col justify-between relative overflow-hidden">
     
        <Routes>
          <Route path="/" element={<Main accounts={accounts} prices={prices}/>}>
            <Route path="home" element={< SeeAccounts/>}></Route>
          </Route>
          <Route path="/ingreso-egreso" element={<AddIngresoEgreso accounts={accounts} egresoIngreso={egresoIngreso}/>}>
            <Route path=':tipo' element={<AddIngresoEgreso accounts={accounts} egresoIngreso={egresoIngreso}/>}/>
          </Route>
          <Route path="/add-account" element={<AddAccount prices={prices} addNewAccount={addNewAccount}/>}></Route>
          
          <Route path="/see-accountss" element={<SeeAccounts accounts={accounts}/>} />
        </Routes>
        
        <Outlet />
    </div>
    
  )
}

export default App

