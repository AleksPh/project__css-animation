import BackgroundVideo from "../components/upper/bgcVideo";
import Header from "../components/upper/header";
import "../style/pages/reg.css"
const Registration = () => {
  return (
    <div>
      <BackgroundVideo/>
      <Header />
     <div className="reg">
        <div className="container">
        <form>
        <h2>Registration</h2>
        <div className="content">
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your valid email address"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              name="phone"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              required
            />
          </div>
          <span className="gender-title">Gender</span>
          <div className="gender-category">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="alert">
          <p>
            By clicking Sign Up, you agree to our <a href="#">Terms,</a> <a href="#">Privacy Policy</a> and{' '}
            <a href="#">Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.
          </p>
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>
        </div>
     </div>
    </div>
  );
};

export default Registration;
