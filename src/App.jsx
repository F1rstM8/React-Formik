import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">squadhelp</div>
        <button
          className="toggle-btn"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Signup" : "Login"}
        </button>
      </header>

      <div className="form-container">
        {isLoginMode ? (
          <div className="login-form">
            <h1>LOGIN TO YOUR ACCOUNT</h1>

            <div className="input-group">
              <input
                type="email"
                placeholder="q@q.q"
                className="input-success"
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="....."
                className="input-error"
              />
              <div className="hint-text">min 6 symbols</div>
            </div>

            <button className="submit-btn">LOGIN</button>
          </div>
        ) : (
          <div className="signup-form">
            <h1>CREATE AN ACCOUNT</h1>
            <p className="subtitle">
              We always keep your name and email address private.
            </p>

            <div className="signup-grid">
              <div className="input-group">
                <input type="text" placeholder="Test" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Testovich" />
              </div>

              <div className="input-group">
                <input type="text" placeholder="test" />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="qqqqqqqqq"
                  className="input-error"
                />
                <div className="hint-text">check email</div>
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="..."
                  className="input-error"
                />
                <div className="hint-text">min 6 symbols</div>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="...."
                  className="input-error"
                />
                <div className="hint-text">
                  confirmation pass must match password
                </div>
              </div>

              <div className="full-width">
                <label className="account-type-box">
                  <input type="radio" name="account_type" defaultChecked />
                  <div>
                    <h4>Join As a Buyer</h4>
                    <p>
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </p>
                  </div>
                </label>

                <label className="account-type-box">
                  <input type="radio" name="account_type" />
                  <div>
                    <h4>Join As a Creative</h4>
                    <p>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </p>
                  </div>
                </label>
              </div>

              <div
                className="full-width"
                style={{ textAlign: "center", fontSize: "12px" }}
              >
                <label>
                  <input type="checkbox" /> By clicking this checkbox, you agree
                  to our <u>Terms of Service.</u>
                </label>
              </div>

              <div className="full-width">
                <button className="submit-btn">Create Account</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
