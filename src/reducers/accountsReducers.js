import { Account } from '../models/Account'
import { IngresoEgreso } from '../models/Account'
import { loadAccounts, createIngresoEgreso, saveAccounts, updateAccounts } from '../Services/apiGet'

const accountsReducers = (state = [], action) =>{
	switch(action.type){
		case 'INITIALIZE_ACCOUNTS':
			return action.data.map(account => new Account({...account}))
		case 'CREATE_ACCOUNT':
			return state.concat(new Account(action.data))
		case 'UPDATE_ACCOUNT':
			return state.map(account => {
				if(account.id === action.data.id){
					return action.data
				}
				else{
					return account
				}
			})
		case 'DELETE_ACCOUNT':
			return state.filter(account => action.data.id !== account.id)
		case 'ADD_GASTO':
			return state.map(account => {
				if(action.id === account.id){
					account.gasto.push(new IngresoEgreso(action.data))					
				}
				return account
			})
		case 'ADD_INGRESO':
			return state.map(account => {
				if(action.id === account.id){
					account.ingreso.push(new IngresoEgreso(action.data))					
				}
				return account
			})
		default:
			return state
	}
}

export const initializeAccounts = () => {
	return async dispatch => {
		const accounts = await loadAccounts()
		dispatch({
			type: 'INITIALIZE_ACCOUNTS',
			data: accounts
		})
	}
}

export const createNewAccount = (newAccount) => {
	return async dispatch => {
		const account = await saveAccounts(newAccount)
		dispatch({
			type: 'CREATE_ACCOUNT',
			data: account
		})
	}
}

export const updateAccounts = (updated) => {
	return async dispatch => {
		const account = await updateAccounts(updated)
		dispatch({
			type: 'UPDATE_ACCOUNT',
			data: account
		})
	}
}

