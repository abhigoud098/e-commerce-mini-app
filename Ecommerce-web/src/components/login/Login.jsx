import { Links } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container">
        <div className="heading">Log In</div>
        <form action className="form">
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input
            className="login-button"
            type="submit"
            defaultValue="Sign In"
          />
        </form>
        <span className="agreement">
          `$You don't have account {<Link to="/app/Sign-up">Home</Link>}`
        </span>
      </div>
      ;
    </>
  );
}

export default Login;
