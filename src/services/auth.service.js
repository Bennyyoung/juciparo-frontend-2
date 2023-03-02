import axios from "axios";

const API_URL = "https://admin.juciparo.com/api/v1/user/";


const register = (firstname, lastname, email, password, phone) => {
  return axios
    .post(API_URL + "register", {
      firstname, 
      lastname,
      email,
      password,
      phone
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

//The service uses Axios for HTTP requests and Local Storage for user information & JWT.
// register(): POST {username, email, password}
// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
