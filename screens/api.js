export const saveData = async (newData) => {
	const res = await fetch('http://192.168.2.30:8080/api/nuevo', {
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
