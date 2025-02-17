import React from "react";
import "./style.css";
import logo from "../../img/logo.png";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import { Send as SendIcon } from "@mui/icons-material"
import { LoadingButton } from "@mui/lab"

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let err = false
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    err = await login(e.target.username.value, e.target.password.value, navigate);
    setLoading(false)
    if (err === true) {
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, '2000')
    }
  };

  return (
    <div className="login-card">
      <div className="login-card-content">
        <div className="headers">
          <div className="logo">
            <div>
              <img src={logo} alt="logo" height="200" width="200" />
            </div>
          </div>
          <a href="/">
            <h2>
              Friend<span className="highlight">o</span>
            </h2>
          </a>
          <h3>Making friends has never been this easy!</h3>
        </div>
      </div>
      <div className="form">
        <div className="form-field username">
          <div className="icon">
            <i className="far fa-user"></i>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form">
              <div className="form-field username">
                <div className="icon">
                  <i className="far fa-user"></i>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  autoComplete="username"
                />
              </div>
              <div className="form-field password">
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                />
              </div>
              <LoadingButton
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                color="primary"
                type="submit"
                className="login-sign_up"
              >
                Login
              </LoadingButton>
              {/* <button type="submit">Login</button> */}
              <div className="signup">
                Don't have an account? <a href="/sign-up">Sign Up Now</a>
              </div>
            </div>
          </form>
        </div>
        <div className="login-card-footer">
          <a href="/recover-account">Forgot password?</a>
        </div>
      </div>
      <Alert text={"Usuário e/ou senha inválido!"} open={open} />
    </div>
  );
}