import { Formik, Form } from 'formik';
import { LoginSchema } from '../utils/validationSchemas';
import Header from './Header';
import CustomInput from './CustomInput';

const Login = () => {
  return (
    <div className="auth-page">
      <Header />
      <div className="auth-container">
        <h1>LOGIN TO YOUR ACCOUNT</h1>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log('Login values:', values)}
        >
          <Form className="auth-form">
            <CustomInput name="email" type="email" placeholder="Email Address" />
            <CustomInput name="password" type="password" placeholder="Password" />
            <button type="submit" className="auth-btn">LOGIN</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;