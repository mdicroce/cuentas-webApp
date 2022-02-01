import React from 'react'

export function AddIngresoEgreso({cuentas = [], egresoIngreso, gasto}){
	const onSubmitHandler = (e) => {
		egresoIngreso(cuentaSelect, {comentario: comentario, cuantity: cuantity}, gasto)
	}
	const [comentario, setComentario] = React.useState('')
	const [cuantity, setCuantity] = React.useState(0);
	const [cuentaSelect, setCuentaSelect] = React.useState('');
	const [date, setDate] = React.useState('')
	const inputHandler = (e, setter) => {
		e.preventDefault()
		setter(e.target.value);
	}

	return (
		<main style={{padding: "1rem 0"}}>
			<h2>{gasto ? "Ingrese nuevo gasto": "Ingrese nuevo Ingreso"}</h2>
			<form onSubmit={onSubmitHandler}>
				<input type="text" name="" id="" placeholder='' value={comentario} onChange={e => inputHandler(e, setComentario)}/>	
				<input type="number" value={cuantity} onChange={e => inputHandler(e, setCuantity)}/>
				<input type="date" name="" id="" value={date} onChange={e => input(e, setDate)} />
				<select name="cuenta" id="" onchange={e => inputHandler(e, setCuentaSelect)} value={cuentaSelect}>
					{cuentas.map(c => <option key={c.id} value={c.id}><span>{c.name}</span> <span>{c.balance}</span></option>)}
				</select>
			</form>
		</main>
	)
}