import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img
        src="http://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        alt=""
      />

      <form>
        <input placeholder="Full name" type="text" />

        <input placeholder="Email" type="email" />

        <input placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?
        <span className="login__register" onclick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
