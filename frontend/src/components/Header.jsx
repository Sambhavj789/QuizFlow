import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-main">
        {/* Left Section of Header */}
        <div className="header-left">
          <h1>QuizFlow</h1>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">ContactUs</Link>
            </li>
          </ul>
        </div>

        {/* Right Section of Header */}
        <div className="header-right">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
