import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e) => {
    try {
      const response = await fetch(
        `http://ebook.heyaskme.in//user_login_api.php?email=${email}&password=${password}`
      );
      const responseData = await response.json();
      const data = responseData["EBOOK_APP"][0];
      localStorage.setItem("name", data.name);
      localStorage.setItem("id", data.user_id);
      console.log(formData);
      toast.success("Logged In successfully");
      setUser(data.name);
      navigate("/");
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="Login-form-body">
        <h4>My Library</h4>
        <div style={{ display: "flex" }}>
          {" "}
          <PersonIcon className="login-icon" />
          <input
            type="text"
            className="box"
            onChange={onChange}
            name="email"
            value={email}
            placeholder="UserName"
          />
        </div>
        <div style={{ display: "flex" }}>
          <LockIcon className="login-icon" />
          <input
            type="text"
            className="box"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="submit" value="Login" onClick={login} />
        <div style={{ margin: "10px" }}>
          Don't have an account !
          <button
            style={{ borderRadius: "10px", backgroundColor: "gray" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
