import React, { useState } from "react";
import axios from "axios";
import CustomAlert from "../CustomAlert";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const [alert, setAlert] = useState({
  show: false,
  message: "",
  type: "",
});

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

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        name,
        email,
        password,
      });

      showAlert("Account created successfully!", "success");

      setName("");
      setEmail("");
      setPassword("");
      setTimeout(()=>{navigate("/");},2000);
    } catch (error) {
      showAlert(error.response?.data?.message || "Signup failed", "danger");
    }
  };

  return (
    <>
    <CustomAlert show={alert.show} message={alert.message} type={alert.type}/>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="col-12 col-sm-8 col-md-5 col-lg-4">
        <div class="card shadow-sm border-0 p-3">
          <div class="card-body">
            <h2 className="p-5">Create Account</h2>
            <div className="form-floating" style={{ textAlign: "center" }}>
              <form onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  className="form-control"
                  id="floating-input"
                  onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

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
                  id="floating-input"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
