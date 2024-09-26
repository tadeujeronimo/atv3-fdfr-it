import "./Button.css";

const Button = ({ ...props }) => {
  return (
    <button type={props.type || "button"} className={props.className} onClick={props.onClick}>
      <i className={props.icon}></i>
      {props.text}
    </button>
  );
};

export default Button;
