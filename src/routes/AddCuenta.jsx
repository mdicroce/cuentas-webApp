import React from 'react'

export function AddCuenta(props){
	console.log(props.prices)
	const [title, setTitle] = React.useState('')
	const [mount, setMount] = React.useState(0)
	const [moneda, setMoneda] = React.useState("peso");
	const [step, setStep] = React.useState(0.001)
	const onChangeSelect = (e) => {
		e.preventDefault()
		setMoneda(e.target.value);
		setStep(stepFunction(e.target.value))
	}
	const stepFunction = (m) => {
		
		switch(m){
			case "peso":
				return 0.005;
			case "btc":
				return 0.00000001;
			case "eth":
				return 0.00000001;
			case "cake": 
				return 0.00001;
			case "luna":
				return 0.0000001;
			case "usd":
				return 0.005;
		}
		
	}

	return(
		<div>
			<form >
				<label htmlFor="title">Nombre de Cuenta</label>
				<input type="text" name="title" id="" value={title} onChange={e => {e.preventDefault(); setTitle(e.target.value)}}/>
				<label htmlFor="mount">Monto de origen</label>
				<input type="number" name="mount" id="" step={step} value={mount} onChange={e => {e.preventDefault(); setMount(e.target.value);}}/>
				<select name="moneda" id="" onChange={onChangeSelect} value={moneda}>
					<option value="peso" selected>Peso</option>
					<option value="btc">Bitcoin</option>
					<option value="eth">Ethereum</option>
					<option value="cake">Pancake Swap</option>¨
					<option value="luna">Luna</option>
					<option value="usd">Dolar/USDT/DAI</option>
				</select>
			</form>
		</div>
	)
}