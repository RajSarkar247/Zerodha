import React, { useState } from "react";
import axios from "axios";
import CustomAlert from "../CustomAlert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      console.log("Response Token:", response.data.token);
      console.log("Stored Token:", localStorage.getItem("token"));
      localStorage.setItem("loggedIn", "true");
      window.dispatchEvent(new Event("storage"));
      showAlert("Login Successful!", "success");
      setTimeout(() => {
        window.location.href = `http://localhost:3000?token=${response.data.token}`;
      }, 2000);
    } catch (error) {
      showAlert(error.response?.data?.message || "Login Failed", "danger");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: "",
        type: "",
      });
    }, 2000);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="col-12 col-sm-8 col-md-5 col-4">
        <div class="card shadow-sm border-0 p-3">
          <div class="card-body">
            <h2 className="p-5">Login to Zerodha</h2>
            <div className="form-floating" style={{ textAlign: "center" }}>
              <CustomAlert
                show={alert.show}
                message={alert.message}
                type={alert.type}
              />
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  className="form-control"
                  id="floating-input"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  className="form-control"
                  id="floatingPassword"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
