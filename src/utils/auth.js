import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { writable } from 'svelte/store';

export let userStatus = writable(false);

const emptyAuth = {
	token: '',
	userId: ''
};

export function logOut() {
	localStorage.setItem('auth', JSON.stringify(emptyAuth));
	userStatus.set(false);
	return true;
}

export function getUserId() {
	const auth = localStorage.getItem('auth');
	if (auth) {
		return JSON.parse(auth)['userId'];
	}
	return null;
}

export function getTokenFromLocalStorage() {
	const auth = localStorage.getItem('auth');
	if (auth) {
		return JSON.parse(auth)['token'];
	}
	return null;
}

export async function isLoggedIn() {
	if (!getTokenFromLocalStorage()) {
		userStatus.set(false); //Refresh page but still logged in
	} else userStatus.set(true);
}

// try {
//   const resp = await fetch(
//     PUBLIC_BACKEND_BASE_URL + '/users',
//     {
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': getTokenFromLocalStorage()
//       },
//     }
//   );

//   const res = await resp.json()
//   if (resp.status == 200) {

//     localStorage.setItem("auth", JSON.stringify({
//       "token": res.token,
//       "userId": res.record.id
//     }));

//     userStatus.set(true);
//     return true
//   }

//   return false
// } catch {
//   return false
// }
// }

export async function authenticateUser(email, password) {
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/auth', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	});

	const res = await resp.json();

	if (resp.status == 200) {
		localStorage.setItem(
			'auth',
			JSON.stringify({
				token: res.accessToken,
				userId: res.userID
			})
		);

		userStatus.set(true);

		return {
			success: true,
			res: res
		};
	}

	return {
		success: false,
		res: res
	};
}
