import { Link } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiContext from "../../context/apiContext";

function SignUp() {
  const { userInfo, setUserInfo } = useContext(ApiContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      setUserInfo(data);
      reset();
      toast.success("🎉 User registered successfully!");
    } else {
      toast.error("⚠️ Password and Confirm Password do not match");
    }
  };

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...storedUsers, userInfo];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [userInfo]);

  return (
    <>
      <ToastContainer position="bottom-center" theme="colored" />

      <div className="signup">
        <div className="hader">
          <span>Shop Verse</span>
          <p>Sign up now for a better experience</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First Name" />

          <input {...register("lastName")} placeholder="Last Name" />

          <input type="email" {...register("email")} placeholder="Email" />

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

          <input type="submit" value="Sign Up" />

          <span>
            Already have an account? <Link to="/app/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default SignUp;
