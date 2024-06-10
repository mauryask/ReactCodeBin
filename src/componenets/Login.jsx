import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = ()=>{
    alert("Email: "+email+"\nPassword: "+password);
  }

  return (
    <div className="login-form">
      <div className="container">
        <div class="mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            autoComplete="off"
            onChange={handleEmail}
          />
        </div>
        <div class="mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            autoComplete="off"
            onChange={handlePassword}
          />
        </div>
        <button type="button" className="btn btn-secondary" onClick={submitForm}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
