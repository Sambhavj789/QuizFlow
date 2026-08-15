import "./Login.css";
import { MdQuiz } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
function Login() {
  return (
    <section className="login-page">
      <form className="login-form">
        <div className="login-header">
          <div className="login-icon">
            <MdQuiz />
          </div>
          <h1>QuizFlow</h1>
          <p>Welcome back to the coaching portal</p>
        </div>

        <div className="form-rows">
          <label htmlFor="">Email Address</label>
          <div className="form-input">
            <MdMailOutline className="form-input-icon" />
            <input type="email" placeholder="admin@institute.com" />
          </div>
        </div>

        <div className="form-rows">
          <label htmlFor="">Password</label>
          <div className="form-input">
            <MdLockOutline className="form-input-icon" />
            <input type="password" />
          </div>
        </div>

        <button className="login-button">Login</button>
      </form>
    </section>
  );
}

export default Login;
