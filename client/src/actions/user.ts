import axios from "axios";

export const login = (email: any, password: any) => {
  console.log(email, password);
  axios
    .post("http://localhost:5000/api/login", { email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const register = (username: String, email: String, password: String) => {
  axios
    .post("http://localhost:5000/api/register", {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
