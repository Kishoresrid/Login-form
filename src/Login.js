import React from "react";
import { useState } from "react";
import data from "./data.json";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    let isTrue = data.find((item) => {
      if (item.username === userName && item.password === password) {
        return true;
      } else {
        return false;
      }
    });
    if (isTrue) {
      window.location.href = "/home";
      window.localStorage.setItem("username", userName);
    } else {
      alert("Invalid username and password");
    }
  }
  return (
    <div class="container">
      <div class="float">
        <h2 className="login">Login</h2>
        <div class="stack-g">
          <div class="inline" id="login">
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" id="login" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
