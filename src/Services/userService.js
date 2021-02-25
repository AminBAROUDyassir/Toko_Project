import axios from 'axios';
import React, { useEffect } from 'react';

const apiEndPoint = "http://localhost:4000/api/usersList"

export function insertUser(data) {
	axios.post(apiEndPoint, data)
	.catch(err => window.alert('error while creating user'))
	// let users = getAllUsers();
	// data['id'] = generateUserId()
    // users.push(data);
	// localStorage.setItem('users', JSON.stringify(users));
}


export function updateUser(data) {
	
axios.put(apiEndPoint+'/'+data._id, data)
.catch(err => window.alert('error while deleting user'))
    // let users = getAllUsers();
    // let recordIndex = users.findIndex(x => x.id == data.id);
    // users[recordIndex] = { ...data }
    // localStorage.setItem(Keys.users, JSON.stringify(users))
}

export function deleteUser(id) {
	axios.delete(apiEndPoint+'/'+id)
	.catch(err => window.alert('error while deleting user'))
    // let users = getAllUsers();
    // users = users.filter(x => x.id != id)
    // localStorage.setItem(Keys.users, JSON.stringify(users));
}


export  async function  getAllUsers() {

	const response = await axios.get(apiEndPoint)
	return Object.values(response.data)
//    .catch(err => window.alert('error while getting users List'))
	// if (localStorage.getItem(Keys.users) == null) localStorage.setItem(Keys.users, JSON.stringify([]));
	// return JSON.parse(localStorage.getItem(Keys.users));
}
