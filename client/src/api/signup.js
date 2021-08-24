import axios from "axios";

// create url link to the back end route
const url = "https://plan-it-v1.herokuapp.com/signup";

// function to fetch all the users from the back end
export async function fetchUser(ip) {
  return await axios.get(`${url}?ip=${ip}`);
}

export async function createUser(newUser) {
  return await axios.post(url, newUser);
}
