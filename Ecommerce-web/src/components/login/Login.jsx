import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = users.find(
        (user) => user.email === data.email && user.password === data.password,
      );

      if (existingUser) {
        alert("Login Successful 🎉");
        navigate("/app");
      } else {
        alert("Invalid Credentials ❌");
      }
    } else {
      alert("⚠️ Password and Confirm Password do not match");
    }
  };

  return (
    <>
      <div className="login">
        <div className="hader">
          <span>Welcome Back..!</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Email")} placeholder="Email" />
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
          />

          <input type="submit" value="Login" />
          <span>
            {" "}
            Not a member place {<Link to="/app/Sign-up">Sign-Up</Link>}
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
