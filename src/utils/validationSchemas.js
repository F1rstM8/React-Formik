import * as Yup from "yup";

const REQUIRED_MSG = "This field is required";

const nameRule = Yup.string().trim().required(REQUIRED_MSG);
const emailRule = Yup.string()
  .trim()
  .email("Invalid email address")
  .required(REQUIRED_MSG);
const passwordRule = Yup.string()
  .min(6, "Must be at least 6 characters")
  .required(REQUIRED_MSG);

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
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(REQUIRED_MSG),
  role: Yup.string().required("Please select a role"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});
