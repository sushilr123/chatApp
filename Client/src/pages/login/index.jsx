import React from "react";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onformsubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Login here</h1>
        </div>
        <form action="" onSubmit={onformsubmit}>
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="card_terms">
        <span>Don't have an account? Signup</span>
        <Link to="/signup">Signup Here</Link>
      </div>
    </div>
  );
}
export default Login;
