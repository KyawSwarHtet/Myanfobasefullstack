import React, { useState } from "react";
import "./login.css";

const LoginCompo = (props) => {
  const [isContainerActive, setIsContainerActive] = useState(false);

  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  /*Register Data */
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;
  /* Register data onchange */
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  /* Register data onsubmit */
  const onSubmit = (e) => {
    e.preventDefault();
  };

  /* login data */
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email: loginemail, password: loginpassword } = loginData;
  /* login data onChange */
  const onChangelogin = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  /* login data onsubmit */
  const onSubmitlogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={"login-con " + (isContainerActive ? "signupmode" : " ")}>
        <div className="forms-con">
          <div className="signin-signup">
            {/* <!-- for sign in --> */}
            <form action="" className="sign-in-form" onSubmit={onSubmitlogin}>
              <h2 className="titlt">Sign in</h2>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={loginemail}
                  onChange={onChangelogin}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginpassword}
                  onChange={onChangelogin}
                />
              </div>
              <input type="submit" value="Login" className="logbtn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://desolate-hollows-16342.herokuapp.com/auth/google"
                  className="social-icon"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            {/* <!-- end of sign in --> */}

            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form" onSubmit={onSubmit}>
              <h2 className="titlt">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
              </div>
              <input type="submit" value="Sign Up" className="logbtn solid" />
              <p className="social-text">Or Sign Up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="login-content">
              <h3>New Here ?</h3>
              <p>If you don't have an account.Please create new one.</p>
              <button
                className="logbtn transparent"
                onClick={signUpButton}
                id="sign-up-btn"
              >
                Sign Up
              </button>
            </div>
            <img src="../images/homeimgs/login2.png" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="login-content">
              <h3>One of Us ?</h3>
              <p>
                If you have already created user account, Please Login here!
              </p>
              <button
                className="logbtn transparent"
                id="sign-in-btn"
                onClick={signInButton}
              >
                Sign In
              </button>
            </div>
            <img src="../images/homeimgs/login1.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCompo;
