import { getPrices } from '../Services/getPrices'

const pricesReducer = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_PRICES':
			return state.concat(action.data)
		default:
			return state;
	}
}

export const loadPrices = () => {
	return async dispatch => {
		const prices = await getPrices()
		dispatch ({
			type: 'LOAD_PRICES',
			data: prices
		})
	}
}

export default pricesReducer