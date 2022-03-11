import axios from "axios";


 let prices = {}
var options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/simple/price',
  params: {
    ids: 'bitcoin,ethereum,pancakeswap-token,terra-luna,tether',
    vs_currencies: 'usd'
  },
  headers: {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_API_KEY
  }
};
export async function  getPrices(){
	
	let dolar = await axios.get("https://api-dolar-argentina.herokuapp.com/api/dolarblue");
	prices.dolar = dolar.data
	axios.request(options).then(function (response) {
		prices = { ...prices, ...response.data}
		toArgy()
		
	}).catch(function (error) {
		console.error(error);
	});
	return prices;

}

function toArgy(){
	prices.bitcoinArgy = prices.bitcoin.usd * prices.dolar.venta;
	prices.ethArgy = prices.ethereum.usd * prices.dolar.venta;
	prices.cakeArgy = prices["pancakeswap-token"].usd * prices.dolar.venta;
	prices.lunaArgy = prices["terra-luna"].usd * prices.dolar.venta;
	console.log(prices)
}