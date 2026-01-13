// import react from 'react';
function Signup() {
  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>
            Created Account Successfully
          </h1>
        </div>
        <div className="form">
          <form action="">
            <div className="column">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button">
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
        <div className="card_terms">
          <span>Already have an account? Login</span>
          <a href="">Login Here</a>
        </div>
      </div>
    </div>
  )
}
export default Signup;