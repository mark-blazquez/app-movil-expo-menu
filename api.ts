const url = 'http://192.168.2.30:8080/api/muestra'

export const load = async ( )=> {
	const res = await fetch(url)
	//console.log(res.json)
	return  await res.json()
	
}