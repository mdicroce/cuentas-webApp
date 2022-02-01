import { Link, Outlet } from "react-router-dom";
import React from 'react'
import { getPrices } from "../Services/getPrices";

export function Main({gastos}) {
	const [objeto, setObjeto] = React.useState('')
	React.useEffect(()=>{
	getPrices().then(r => setObjeto(r));
	},[])
	return (
		<main style={{padding: "1rem 0"}}>
			<ul >
				<li>
					<Link to="/AddGasto">Nuevo Gasto</Link>
				</li>
				<li>
					<Link to="/AddIngreso" > Nuevo Ingreso </Link>
				</li>
			</ul>

			<Link to={`/main/hola`}> Hola</Link>
			<Outlet />
			
			
			
		</main>
	)
}

