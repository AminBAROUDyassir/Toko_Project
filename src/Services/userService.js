import axios from 'axios';

const apiEndPoint = 'http://localhost:4000/api/usersList';

export function insertUser(data) {
	return axios.post(apiEndPoint, data).catch((err) => window.alert('error while adding new user'));
	// let users = getAllUsers();
	// data['id'] = generateUserId()
	// users.push(data);
	// localStorage.setItem('users', JSON.stringify(users));
}

export function updateUser(data) {
	axios.put(apiEndPoint + '/' + data._id, data).catch((err) => window.alert('error while updating user'));
	// let users = getAllUsers();
	// let recordIndex = users.findIndex(x => x.id == data.id);
	// users[recordIndex] = { ...data }
	// localStorage.setItem(Keys.users, JSON.stringify(users))
}

export function deleteUser(id) {
	axios.delete(apiEndPoint + '/' + id).catch((err) => window.alert('error while deleting user'));
	// let users = getAllUsers();
	// users = users.filter(x => x.id != id)
	// localStorage.setItem(Keys.users, JSON.stringify(users));
}

export function getUser(id) {
	return (
		axios
			.get(apiEndPoint + '/' + id)
			.catch((err) => window.alert('error while getting users List'))
	);
}
export function getAllUsers() {
	return (
		axios
			.get(apiEndPoint)
			.catch((err) => window.alert('error while getting users List'))
	);
	// if (localStorage.getItem(Keys.users) == null) localStorage.setItem(Keys.users, JSON.stringify([]));
	// return JSON.parse(localStorage.getItem(Keys.users));
}
