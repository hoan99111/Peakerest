import React, { useState } from "react";
import "./AuthPage.css";
import { Image } from "../../components/image/image";

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" w={36} h={36}></Image>
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="register">
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                placeholder="Username"
                id="username"
                required
                name="username"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Display name</label>
              <input
                type="displayName"
                placeholder="Display name"
                id="displayName"
                required
                name="displayName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                required
                name="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                name="password"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                name="email"
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Already have an account? 
              <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="login">
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" id="password" />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? 
              <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};
