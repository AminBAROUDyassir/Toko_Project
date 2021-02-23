const Keys = {
	users: 'users',
	userId: 'userId'
};

export function insertUser(data) {
	let users = getAllUsers();
	data['id'] = generateUserId()
    users.push(data);
	localStorage.setItem('users', JSON.stringify(users));
}

export function generateUserId() {
	if (localStorage.getItem(Keys.userId) == null) localStorage.setItem(Keys.userId, '0');
	var id = parseInt(localStorage.getItem(Keys.userId));
	localStorage.setItem(Keys.userId, (++id).toString());
	return id;
}

export function updateUser(data) {
    let users = getAllUsers();
    let recordIndex = users.findIndex(x => x.id == data.id);
    users[recordIndex] = { ...data }
    localStorage.setItem(Keys.users, JSON.stringify(users))
}

export function deleteUser(id) {
    let users = getAllUsers();
    users = users.filter(x => x.id != id)
    localStorage.setItem(Keys.users, JSON.stringify(users));
}


export function getAllUsers() {
	if (localStorage.getItem(Keys.users) == null) localStorage.setItem(Keys.users, JSON.stringify([]));
	return JSON.parse(localStorage.getItem(Keys.users));
}
