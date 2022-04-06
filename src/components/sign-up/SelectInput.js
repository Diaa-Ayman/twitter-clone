import classes from './SelectInput.module.css'
const SelectInput = (props) => {
  return (
    <select
      className={`${classes.select} ${props.className}`}
      value={props.value}
    >
      {props.options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  )
}

export default SelectInput
