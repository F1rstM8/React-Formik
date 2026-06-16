import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "../utils/validationSchemas";
import Header from "./Header";
import CustomInput from "./CustomInput";

const Register = () => {
  return (
    <div className="auth-page">
      
      <Header />

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
         
          <Form className="auth-form">
            
            <div className="form-grid">
            
              <CustomInput name="firstName" placeholder="First Name" />
              <CustomInput name="lastName" placeholder="Last Name" />
              <CustomInput name="displayName" placeholder="Display Name" />
              <CustomInput name="email" type="email" placeholder="Email Address" />
              <CustomInput name="password" type="password" placeholder="Password" />
              <CustomInput name="confirmPassword" type="password" placeholder="Password Confirmation" />
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
              <ErrorMessage name="role" component="div" className="error-message" />
            </div>

            <div className="terms-group">
              <label>
                <Field type="checkbox" name="acceptTerms" /> By clicking this
                checkbox, you agree to our <a href="#">Terms of Service</a>.
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="error-message" />
            </div>

            <button type="submit" className="auth-btn">
              Create Account
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;