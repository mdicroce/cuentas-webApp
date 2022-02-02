export function loadInfo(loadCounts){
	loadCounts(JSON.parse(window.localStorage.getItem('counts')))
}

export function saveInfo(counts){
	window.localStorage.setItem('counts',JSON.stringify(counts));
}