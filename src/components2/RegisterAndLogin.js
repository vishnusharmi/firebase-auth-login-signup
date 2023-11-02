import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };
  return (
    <div className="App">
      <div className="card">
        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input name="email" placeholder="Email" />
          <input name="password" type="text" placeholder="Password" />
          <button>{login ? "SignIn" : "SignUp"}</button>
        </form>
        <p>
          Forgot Password? <button onClick={handleReset}>click</button>
        </p>
        <div className={login === false ? "activeColor" : "pointer"}>
          Register Now ?<button onClick={() => setLogin(false)}>SignUp</button>
        </div>
        <div className={login === true ? "activeColor" : "pointer"}>
          I have an account :
          <button onClick={() => setLogin(true)}>SignIn</button>
        </div>
      </div>
    </div>
  );
}
export default RegisterAndLogin;
