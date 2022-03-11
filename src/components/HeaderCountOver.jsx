import {useEffect} from 'react'
import Select from 'react-select'

export function HeaderCountOver ({accounts, selectedAccount ,setSelectedAccount, isTotal}) {
	let options = [...accounts.map(ac => {
		 return {value: ac.title, label: `${ac.title} ${ac.balance}`}
		}), ]
	if(isTotal){
		
		options = [{value: "Total", label: `Total ${accountsTotal(accounts)}`} ,...options]
	}
	
	return (<div>
			
		
					<Select options={options} onChange={(value) => {
						setSelectedAccount(value)}} value={selectedAccount}/>
	</div>)
}

export const accountsTotal = (accounts = []) => {
	const accountMapped = accounts.map(c => c.balance)
	return accountMapped.reduce((aa, ap) => aa += Number(ap), 0)
}

