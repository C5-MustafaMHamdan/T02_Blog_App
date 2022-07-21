import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../redux/reducers/auth";
import { setlogin, logout } from "../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

/* Bret
Sincere@april.biz */

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { loginy } = useSelector((state) => {
    return {
      loginy: state.auth.isLoggedIn,
       
    };
  });

  const doLogin = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
        let id;
        let usrInfo = {};
        let exist = false;

        result.data.forEach((element) => {
          if (element.username === name && element.email === email) {
            exist = true;
            usrInfo = element;
          }
          if (exist) {
            dispatch(setlogin(usrInfo));

            navigate("/");
          } else {
            setMessage("the data you have entered is wrong ");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Your Name"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Your Email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          doLogin();
        }}
      >
        Log in
      </button>

      {message && <p> {message} </p>}
    </div>
  );
};

export default Login;
