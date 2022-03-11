export function IndividualResume({gastoIngreso}){
	return (<div className="bg-slate-100 p-3 m-3 rounded flex flex-col justify-center items-center">
		<div>
			{gastoIngreso.titulo}
		</div>
		<div>
			{gastoIngreso.fecha.toISOString().split('T')[0]}
		</div>
		<div>
			{gastoIngreso.monto}
		</div>
	</div>)
}