import axios from "axios";

// const account = {
//   email: "hansaem@gmail.com",
//   password: "1234"
// };

const sign_in = (email, password) =>
  axios.post(
    "https://dh-todo-api.herokuapp.com/sign-in",
    {
      email: email,
      password: password
    },
    {
      withCredentials: true
    }
  );

export { sign_in };
