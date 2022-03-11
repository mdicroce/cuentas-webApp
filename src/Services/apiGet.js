import axios from 'axios'
const baseUrl = import.meta.env.VITE_BASE_URL_API

export async function loadAccounts(){
	const response = await axios.get(`${baseUrl}accounts`)
	return response.data
}

export async function saveAccounts(account){
	
	const response = await axios.post(`${baseUrl}accounts`, account)
	return response.data
}

export async function updateAccounts(account){
	const response = await axios.put(`${baseUrl}accounts/${account.id}`,account)
	return response.data
}

export async function createIngresoEgreso(ingresoEgreso){
	const response = await axios.post(`${baseUrl}ingresoEgreso`,ingresoEgreso)
	return response.data
}

