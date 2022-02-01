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
    'x-rapidapi-key': 'b3a0fd95fdmsh9054c94d14ccc7cp16d43ajsndb9a6d7a7c2a'
  }
};
export async function  getPrices(){
	let dolar = await axios.get("https://api-dolar-argentina.herokuapp.com/api/dolarblue");
	prices.dolar = dolar.data
	axios.request(options).then(function (response) {
		prices = { ...prices, ...response.data}
		toArgy()
		console.log(prices)
		
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
}