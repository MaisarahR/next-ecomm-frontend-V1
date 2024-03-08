import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { getUserId, getTokenFromLocalStorage } from '../../utils/auth.js';

// Function to fetch posts by user ID
export async function load({ fetch }) {
  const token = getTokenFromLocalStorage();
  const userId = getUserId(); // Example function call

  const resp = await fetch(`${PUBLIC_BACKEND_BASE_URL}/image/user/${userId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const res = await resp.json();
  // console.log(res);
  if (resp.status === 200) {
    return {
      post: res
    };
  } else {
    return {
      post: []
    };
  }
}

//The code you provided is a SvelteKit load function, which is used to fetch data for a specific route during server-side rendering or pre-rendering. This function fetches data from an API endpoint based on the provided slug parameter.