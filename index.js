/*
	* Date: 2021-01-23
	* Message: Pop Quiz js logic will be stored here.
	* Mensaje: La logica del quiz de ubicacion sorpresa va a estar almacenada aca.
*/

// [GET] users API URL
const getUsersApiUrl = "https://jsonplaceholder.typicode.com/users"
// Get Users from json Place holder

const getUsers = async (url) => {

	return await fetch(url).then(response => response.json().then(data => data))
}
let users = getUsers(getUsersApiUrl)
console.log(users)
// View Users in Table [TODO]
const viewUsers = (userlist) => {
	let table = document.getElementById('users')
	userlist.map(user => table.insertRow().insertCell().appendChild(user.id))
};
viewUsers(users);
