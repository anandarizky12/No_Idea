import axios from "axios";

export const login = (email: String, password: String) => (dispatch: any) => {
  axios
    .post("http://localhost:5000/api/login", { email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register =
  (username: String, email: String, password: String) => (dispatch: any) => {
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
        console.log(err);
      });
  };
