import { faD, faStepForward } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { HeaderCountOver } from './HeaderCountOver'

export function Header ({children,option,  setOption}) {
	const onClickHandler = (e) => {
		e.preventDefault()
		setOption(o => !o)
	}
	return (

			<div className="bg-green-400 h-20 rounded-b-2xl flex flex-col justify-between">
				<div>
					{children}

				</div>
				<div className="flex ">
					<button key={0} onClick={ onClickHandler } disabled={option} 
					className={`grow rounded-bl-lg hover:bg-orange-600 bg-orange-400 border-r.2 border-r-orange-600 w-full  ${option ? "bg-orange-600" : "" }`}>Gastos</button>
					<button key={1} onClick={ onClickHandler } disabled={!option} 
					className={`grow rounded-br-lg hover:bg-orange-600 bg-orange-400 border-l-2 border-l-orange-600 w-full ${!option ? "bg-orange-600" : ""}`}>Ingresos</button>
				</div>
  		</div>
	)
}

{/* <nav style={{
	borderBottom: "solid 1px",
	paddingBottom: "1rem"
}}>
	<Link to="/" >Main</Link>
	<Link to="AddGasto" > Add Gasto </Link>
	<Link to="AddIngreso">Add Ingreso</Link>
	<Link to="AddCuenta">Add Cuenta</Link>
	<Link to="Ver Cuentas" > Ver Cuentas </Link>
</nav>

 */}