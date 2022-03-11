import { Link, Outlet, useNavigate } from "react-router-dom";
import React from 'react'
import { Header } from "../components/Header";
import { IndividualResume } from '../components/IndividualResume'
import { ResumeMain } from "../components/ResumeMain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { HeaderCountOver, accountsTotal } from "../components/HeaderCountOver";

export function Main({accounts, prices}) {
	let navigate = useNavigate()
	const [selectedAccount, setSelectedAccount] = React.useState({value: "Total", label: `Total ${accountsTotal(accounts)}`})
	const [showGasto, setShowGasto] = React.useState(true)
	console.log(prices)
	const buttonAddFunction = (e) =>{
		e.preventDefault()
		navigate(`/ingreso-egreso/${Number(showGasto)}`)
	}
	const buttonAddCount = (e) => {
		e.preventDefault()
		navigate(`/add-account`)
	}
	React.useEffect(()=>{
		setSelectedAccount({value: "Total", label: `Total ${accountsTotal(accounts)}`})
	},[accounts])
	return (
		<main>
			<Header  option={showGasto} setOption={setShowGasto} isTotal={true}>
				<div className="flex flex-row">
					<HeaderCountOver accounts={accounts} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} prices={prices}/>
					<button onClick={buttonAddCount} className="bg-red-400">Crear Cuenta</button>
				</div>
			</Header>
			<ResumeMain />
			<div className="grid xl:grid-cols-5 grid-cols-2">

					{accounts.length > 0 ? individualResumeMap(accounts.filter(a => {
						if(selectedAccount.value === "Total"){
							return true;
						}
						else{
							return a.title === selectedAccount.value
						}
						
					}),showGasto, prices) : ""}
			</div>
			
			<button onClick={buttonAddFunction} className="bg-red-400 rounded-full w-12 h-12 fixed bottom-2 right-2" >
				<FontAwesomeIcon className="text-slate-50" icon={faPlus}/>
			</button>
			<Outlet />
		</main>
	)
}


const individualResumeMap = (account, gasto, prices) => {
	let accounts = account.map(ac => {
		if(gasto){
			return ac.egresos;
		}
		else{
			return ac.ingresos;
		}
	}).flat()
	
	return accounts.sort((a,b) => b.fecha - a.fecha).map(g => <IndividualResume key={g.id} gastoIngreso={g} prices={prices} />)
}