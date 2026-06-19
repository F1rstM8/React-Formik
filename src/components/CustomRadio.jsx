import { Field } from "formik";

const CustomRadio = ({ name, value, title, description }) => {
  return (
    <label className="role-label">
      <Field type="radio" name={name} value={value} />
      <div className="role-text">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
    </label>
  );
};

export default CustomRadio;