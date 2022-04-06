import classes from './OuterInputs.module.css';

const OuterInput = (props) => {
  return (
    <div>
      <label htmlFor={props.for}>
        <props.icon className={classes.icon} />
      </label>
      <input
        onChange={props.onChange}
        className={classes['media-input']}
        type={props.type}
        id={props.id}
      />
    </div>
  );
};

export default OuterInput;
