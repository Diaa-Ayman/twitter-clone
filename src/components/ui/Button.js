import classes from './Button.module.css';
const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      value={props.value}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
