import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        alert("Check your gmail");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <center>
      <div className="card">
        <h1>Forgot Password</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="email" />
          <br />
          <br />
          <button>Reset</button>
        </form>
      </div>
    </center>
  );
}
export default ForgotPassword;
