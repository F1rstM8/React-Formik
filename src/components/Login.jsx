import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Некоректний формат email')
    .required('Обов’язкове поле'),
  password: Yup.string()
    .min(6, 'Пароль має бути не менше 6 символів')
    .required('Обов’язкове поле'),
});

const Login = () => {
  return (
    <div className="auth-card">
      <h2>Вхід до системи</h2>
      
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log('Login submitted:', values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="auth-form">
            
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={classNames('auth-input', {
                  'auth-input--error': errors.email && touched.email,
                  'auth-input--success': !errors.email && touched.email,
                })}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Пароль</label>
              <Field
                type="password"
                id="password"
                name="password"
                className={classNames('auth-input', {
                  'auth-input--error': errors.password && touched.password,
                  'auth-input--success': !errors.password && touched.password,
                })}
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <Field type="checkbox" name="rememberMe" className="auth-checkbox" />
                <span>Запам'ятати мене</span>
              </label>
            </div>

            <button type="submit" className="auth-btn">Увійти</button>
          </Form>
        )}
      </Formik>

      <p className="auth-redirect">
        Немає акаунту? <Link to="/register">Зареєструватися</Link>
      </p>
    </div>
  );
};

export default Login;