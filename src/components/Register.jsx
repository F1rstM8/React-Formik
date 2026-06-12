import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Ім’я занадто коротке')
    .required('Обов’язкове поле'),
  email: Yup.string()
    .email('Некоректний формат email')
    .required('Обов’язкове поле'),
  password: Yup.string()
    .min(6, 'Мінімум 6 символів')
    .required('Обов’язкове поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі не збігаються')
    .required('Обов’язкове поле'),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'Ви маєте погодитися з умовами використання'),
});

const Register = () => {
  return (
    <div className="auth-card">
      <h2>Реєстрація</h2>

      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '', acceptTerms: false }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log('Register submitted:', values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="auth-form">

            <div className="input-group">
              <label htmlFor="username">Ім'я користувача</label>
              <Field
                type="text"
                id="username"
                name="username"
                className={classNames('auth-input', {
                  'auth-input--error': errors.username && touched.username,
                  'auth-input--success': !errors.username && touched.username,
                })}
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

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

            <div className="input-group">
              <label htmlFor="confirmPassword">Підтвердження пароля</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={classNames('auth-input', {
                  'auth-input--error': errors.confirmPassword && touched.confirmPassword,
                  'auth-input--success': !errors.confirmPassword && touched.confirmPassword,
                })}
              />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <Field type="checkbox" name="acceptTerms" className="auth-checkbox" />
                <span>Я приймаю умови використання</span>
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="error-message" />
            </div>

            <button type="submit" className="auth-btn">Зареєструватися</button>
          </Form>
        )}
      </Formik>

      <p className="auth-redirect">
        Вже є акаунт? <Link to="/login">Увійти</Link>
      </p>
    </div>
  );
};

export default Register;