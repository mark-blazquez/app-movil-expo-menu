//funcion insercion
export const saveData = async (newData) => {
	//const res = await fetch('https://torre-ubuntu.ddns.net:31059/api/nuevo', {
	//const res = await fetch('http://192.168.68.113:8080/api/nuevo', {
	const res = await fetch('http://192.168.2.122:8080/api/nuevo', {
		method: 'POST',
		headers: {
			'accept': 'aplication/json',
			'content-type': 'aplication/json',
			Authorization: JSON.stringify(newData)
		},
		//body:JSON.stringify(newData)
	});

	return await res.json()
}
//funcion borrado
export const deleteData = async (newData) => {
	//const res = await fetch('https://torre-ubuntu.ddns.net:31059/api/delete', {
	//const res = await fetch('http://192.168.68.113:8080/api/delete', {
	const res = await fetch('http://192.168.2.122:8080/api/delete', {
		method: 'POST',
		headers: {
			'accept': 'aplication/json',
			'content-type': 'aplication/json',
			Authorization: JSON.stringify(newData)
		},
		//body:JSON.stringify(newData)
	});

	return await res.json()
}
