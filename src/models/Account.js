/* 
	Recordar SOLUCIONAR el tema del objeto IngresoEgreso con respecto al reducer.
*/

export class IngresoEgreso {
	constructor ({fecha,monto, comentario, titulo}){
		this.id = this.setId()
		this.fecha = new Date(fecha);
		this.monto = Number(monto);
		this.comentario = comentario;
		this.titulo = titulo;
		
	}
}
export class Account{
	constructor({id, title, moneda, balance, ingresos = [], egresos = []}){
		this.id = id;
		this.title = title;
		this.moneda = moneda;
		this.balance = Number(balance);
		this.ingresos = ingresos.map(m => new IngresoEgreso(m));
		this.egresos = egresos.map(e => new IngresoEgreso(e));
	}
	addIngreso(titulo, comentario, monto, fecha){
		this.ingresos.push(new IngresoEgreso({fecha,monto,comentario,titulo}))
		this.balance += Number(monto);
		console.log("hola")
	}
	addEgreso(titulo, comentario, monto, fecha){
		this.egresos.push(new IngresoEgreso({fecha,monto,comentario,titulo}))
		this.balance -= Number(monto);
		
	}

}
