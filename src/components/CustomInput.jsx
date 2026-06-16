import { useField, ErrorMessage } from 'formik';
import classNames from 'classnames'; 

const CustomInput = ({ placeholder, type = "text", ...props }) => {

  const [field, meta] = useField(props);
  return (
    <div className="input-group">
      <input
        {...field}
        {...props}
        type={type}
        placeholder={placeholder}
        className={classNames('auth-input', {
          'auth-input--error': meta.touched && meta.error,
          'auth-input--success': meta.touched && !meta.error,
        })}
      />
      
      <ErrorMessage name={field.name} component="div" className="error-message" />
    </div>
  );
};

export default CustomInput;