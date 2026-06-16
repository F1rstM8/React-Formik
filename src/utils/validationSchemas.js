import * as Yup from 'yup';


const nameRule = Yup.string().trim().required('Field is required');
const emailRule = Yup.string().trim().email('Check email format').required('Email is required');
const passwordRule = Yup.string().min(6, 'min 6 symbols').required('Password is required');


export const LoginSchema = Yup.object().shape({
  email: emailRule,
  password: passwordRule,
});


export const RegisterSchema = Yup.object().shape({
  firstName: nameRule,
  lastName: nameRule,
  displayName: nameRule,
  email: emailRule,
  password: passwordRule,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'confirmation pass must match password')
    .required('Confirmation is required'),
  role: Yup.string().required('Please select a role'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must agree to the Terms of Service'),
});