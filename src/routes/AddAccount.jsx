import React from 'react'
import { Account } from '../models/Account';
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

export function AddAccount({addNewAccount}){
	const navigate = useNavigate()
	const [title, setTitle] = React.useState('')
	const [mount, setMount] = React.useState(0)
	const [moneda, setMoneda] = React.useState("peso");
	const [step, setStep] = React.useState(0.001)
	const options = [
		{value: "pesos", label: "Pesos"},
		{value: "btc", label: "Bitcoin"},
		{value: "eth", label: "Ethereum"},
		{value: "cake", label: "PancakeSwap Token"},
		{value: "luna", label: "Luna"},
		{value: "usd", label: "USD"}
	]
	const addAccount = (e) => {
		e.preventDefault()
		const newAccount = new Account({id: Math.floor(Math.random()*100), title: title, moneda: moneda, balance: mount})
		addNewAccount(newAccount)
		navigate('/')
	}
	const onChangeSelect = ({value}) => {
		
		setMoneda(value);
		setStep(stepFunction(value))
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
			<form onSubmit={addAccount}>
				<label htmlFor="title">Nombre de Cuenta</label>
				<input type="text" name="title" id="" value={title} onChange={e => {e.preventDefault(); setTitle(e.target.value)}}/>
				<label htmlFor="mount">Monto de origen</label>
				<input type="number" name="mount" id="" step={step} value={mount} onChange={e => {e.preventDefault(); setMount(e.target.value);}}/>
				<Select options={options} onChange={onChangeSelect}/>
				{/* <select name="moneda" id="" onChange={onChangeSelect} value={moneda}>
					<option value="peso" selected>Peso</option>
					<option value="btc">Bitcoin</option>
					<option value="eth">Ethereum</option>
					<option value="cake">Pancake Swap</option>¨
					<option value="luna">Luna</option>
					<option value="usd">Dolar/USDT/DAI</option>
				</select> */}
				<button type="submit">Add Cuenta</button>
			</form>
		</div>
	)
}