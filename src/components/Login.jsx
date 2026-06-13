import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '../utils/validationSchemas';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Login = () => {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="logo">💬 squadhelp</Link>
        <Link to="/register" className="switch-btn">Signup</Link>
      </header>

      <div className="auth-container">
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log('Login values:', values)}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">
              
              <div className="input-group">
                <Field type="email" name="email" placeholder="Email Address"
                  className={classNames('auth-input', {
                    'auth-input--error': errors.email && touched.email,
                    'auth-input--success': !errors.email && touched.email,
                  })} />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="input-group">
                <Field type="password" name="password" placeholder="Password"
                  className={classNames('auth-input', {
                    'auth-input--error': errors.password && touched.password,
                    'auth-input--success': !errors.password && touched.password,
                  })} />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <button type="submit" className="auth-btn">LOGIN</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;