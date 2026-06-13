import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please check your email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "min 6 symbols")
    .required("Password is required"),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(1, "First name is required")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(1, "Last name is required")
    .required("Last name is required"),
  displayName: Yup.string()
    .trim()
    .min(1, "Display Name is required")
    .required("Display Name is required"),
  email: Yup.string()
    .trim()
    .email("Check email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "min 6 symbols")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "confirmation pass must match password")
    .required("Confirmation is required"),
  role: Yup.string().required("Please select a role"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must agree to the Terms of Service",
  ),
});
