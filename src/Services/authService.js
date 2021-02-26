import axios from 'axios';

const apiEndPoint = "http://localhost:4000/api/auth"


export function login(email, password) {
	return axios.post(apiEndPoint, {email, password})
}
