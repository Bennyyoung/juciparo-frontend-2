import axios from "axios";
import { toast } from "react-toastify"

const API_URL = "https://admin.juciparo.com/api/v1";



const register = (firstname, lastname, email, password, phone) => {
  return axios
    .post(API_URL + "user/register", {
      firstname,
      lastname,
      email,
      password,
      phone
    });
};

const vendorRegister = (
  firstname,
  lastname,
  email,
  phone,
  password,
  businessName,
  state,
  address,
  referral,
  category,
  city,
  subscription,
  image) => {
  return axios
    .post(API_URL + "user/register_vendor", {
      firstname,
      lastname,
      email,
      phone,
      password,
      businessName,
      state,
      address,
      referral,
      category,
      city,
      subscription,
      image
    }, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
};

const login = async (email, password) => {
  return axios
    .post(API_URL + "/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response?.data?.authorisation) {
        try {
          // localStorage.setItem("user", JSON.stringify(response?.data));
          localStorage.setItem("user", JSON.stringify(response?.data))

        } catch (err) {
          toast(err)
        }
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};


const checkout = async (first_name,
  last_name,
  email,
  phone,
  country,
  address1,
  address2,
  postal_code) => {

  //   {
  //     "status": "success",
  //     "user": {
  //         "id": 2,
  //         "name": "User",
  //         "email": "user@s.com",
  //         "phone": "09011223344",
  //         "photo": null,
  //         "role": "user",
  //         "status": "active"
  //     },
  //     "authorisation": {
  //         "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkbWluLmp1Y2lwYXJvLmNvbS9hcGkvdjEvdXNlci9sb2dpbiIsImlhdCI6MTY3ODU3MDQxNywiZXhwIjoxNjc4NTc0MDE3LCJuYmYiOjE2Nzg1NzA0MTcsImp0aSI6IkRsSXJrM2xRR2RESnJ2RVMiLCJzdWIiOiIyIiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.b6rCiIgbFJ1LcDsk1vvnQ76qkZ8vEo6IGfKceYgmDOI",
  //         "token_type": "bearer",
  //         "expires_in": "60 minutes"
  //     }
  // }
  const { authorisation } = JSON.parse(localStorage.getItem("user"))
  const { access_token } = authorisation

  return axios
    .post(API_URL + "/checkout", {
      first_name,
      last_name,
      email,
      phone,
      country,
      address1,
      address2,
      postal_code
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    .then((response) => {
      return response.data
    })
}

const authService = {
  register,
  vendorRegister,
  login,
  logout,
  checkout
};

export default authService;

//The service uses Axios for HTTP requests and Local Storage for user information & JWT.
// register(): POST {username, email, password}
// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
