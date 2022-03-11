import React from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { HeaderCountOver } from '../components/HeaderCountOver'

export function AddIngresoEgreso({accounts = [], egresoIngreso}){
	const params = useParams()
	
	const [gasto, setGasto] = React.useState(Number(params["tipo"]))
	const navigate = useNavigate()
	
	const options = accounts.map(a => {
		return {value: a.title, label: `${a.title} ${a.balance}`}
	})
	const onSubmitHandler = (e) => {
		e.preventDefault()
		console.log(selectedAccount)
		egresoIngreso(selectedAccount.value, {titulo: titulo,comentario: comentario, monto: cuantity, fecha: date}, Boolean(gasto))
		navigate('/')

	}

	const [titulo, setTitulo] = React.useState('');
	const [comentario, setComentario] = React.useState('')
	const [cuantity, setCuantity] = React.useState(0);
	const [selectedAccount, setSelectedAccount] = React.useState(accounts[0]);
	const [date, setDate] = React.useState(new Date().toISOString().split('T')[0])
	const inputHandler = (e, setter) => {
		console.log(e.target.value)
		e.preventDefault()
		setter(e.target.value);
	}
	React.useEffect(()=>{
		console.log(selectedAccount)
	},[selectedAccount])
	return (
		<div className='pl-3 pr-3 '>

				<Header option={gasto} setOption={setGasto} children={<HeaderCountOver accounts={accounts} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>}/>
			<main className='bg-white rounded p-3'>
				<h2 className='text-xl'>{gasto ? "Ingrese nuevo gasto": "Ingrese nuevo Ingreso"}</h2>
				<form className='flex flex-col p-0' onSubmit={onSubmitHandler}>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="" value={titulo} onChange={e => inputHandler(e, setTitulo)}/>
					<label htmlFor="mount">Mount</label>
					<input type="number" name="mount"value={cuantity} onChange={e => inputHandler(e, setCuantity)}/>
					<input type="text" name="" id="" placeholder='' value={comentario} onChange={e => inputHandler(e, setComentario)}/>	
					<input type="date" name="" id="" value={date} onChange={e => inputHandler(e, setDate)} />
				
					<Select options={options} onChange={e => setSelectedAccount(e)} value={selectedAccount} />
					{/* <select name="account" id="" onChange={e => inputHandler(e, setAccountSelect)} value={accountSelect}>
						{accounts.map((c,i) => <option key={c.title}  value={c.title}>{`${c.title}  ${c.balance}`}</option>)}
					</select> */}
					<button type='submit' children={gasto ? "Add Gasto" : "Add Ingreso"}></button>
				</form>
			</main>
		</div>
	)
}
