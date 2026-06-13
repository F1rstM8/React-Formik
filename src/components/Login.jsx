import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please check your email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'min 6 symbols')
    .required('Password is required'),
});

const Login = () => {
  return (
    <div className="auth-page">
      {/* Шапка */}
      <header className="auth-header">
        <Link to="/" className="logo">
          💬 squadhelp
        </Link>
        <Link to="/register" className="switch-btn">Signup</Link>
      </header>

      <div className="auth-form-container">
        <h2>Login to your account</h2>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log('Login values:', values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">
              
              <div className="input-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={classNames('auth-input', {
                    'auth-input--error': errors.email && touched.email,
                    'auth-input--success': !errors.email && touched.email,
                  })}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="input-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={classNames('auth-input', {
                    'auth-input--error': errors.password && touched.password,
                    'auth-input--success': !errors.password && touched.password,
                  })}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <button type="submit" className="auth-btn">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;