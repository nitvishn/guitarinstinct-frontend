import axios from "axios";

const API_URL = "http://localhost:3001/v1/auth/";

const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name: name,
    email: email,
    password: password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
        console.log(localStorage.getItem("tokens"));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};