import "./FormInput.css";

const FormInput = ({ ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.inputName}>{props.label}</label>
      <input
        type={props.type}
        name={props.inputName}
        placeholder={props.placeholder}
        id={props.inputName}
        required={props.required}
      />
    </div>
  );
};

export default FormInput;
