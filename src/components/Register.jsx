import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../utils/validationSchemas";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Register = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="logo">
          💬 squadhelp
        </Link>
        <Link to="/login" className="switch-btn">
          Login
        </Link>
      </header>

      <div className="auth-container wide">
        <h1>CREATE AN ACCOUNT</h1>
        <p className="subtitle">
          We always keep your name and email address private.
        </p>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            acceptTerms: false,
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => console.log("Register values:", values)}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">
              <div className="form-grid">
                <div className="input-group">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={classNames("auth-input", {
                      "auth-input--error":
                        errors.firstName && touched.firstName,
                      "auth-input--success":
                        !errors.firstName && touched.firstName,
                    })}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={classNames("auth-input", {
                      "auth-input--error": errors.lastName && touched.lastName,
                      "auth-input--success":
                        !errors.lastName && touched.lastName,
                    })}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                    className={classNames("auth-input", {
                      "auth-input--error":
                        errors.displayName && touched.displayName,
                      "auth-input--success":
                        !errors.displayName && touched.displayName,
                    })}
                  />
                  <ErrorMessage
                    name="displayName"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={classNames("auth-input", {
                      "auth-input--error": errors.email && touched.email,
                      "auth-input--success": !errors.email && touched.email,
                    })}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={classNames("auth-input", {
                      "auth-input--error": errors.password && touched.password,
                      "auth-input--success":
                        !errors.password && touched.password,
                    })}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Password Confirmation"
                    className={classNames("auth-input", {
                      "auth-input--error":
                        errors.confirmPassword && touched.confirmPassword,
                      "auth-input--success":
                        !errors.confirmPassword && touched.confirmPassword,
                    })}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              <div className="role-group">
                <label className="role-label">
                  <Field type="radio" name="role" value="buyer" />
                  <div className="role-text">
                    <strong>Join As a Buyer</strong>
                    <span>
                      I am looking for a Name, Logo or Tagline for my business,
                      brand or product.
                    </span>
                  </div>
                </label>

                <label className="role-label">
                  <Field type="radio" name="role" value="creative" />
                  <div className="role-text">
                    <strong>Join As a Creative</strong>
                    <span>
                      I plan to submit name ideas, Logo designs or sell names in
                      Domain Marketplace.
                    </span>
                  </div>
                </label>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="terms-group">
                <label>
                  <Field type="checkbox" name="acceptTerms" /> By clicking this
                  checkbox, you agree to our <a href="#">Terms of Service</a>.
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="error-message"
                />
              </div>

              <button type="submit" className="auth-btn">
                Create Account
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
