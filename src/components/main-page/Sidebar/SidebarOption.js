import classes from './SidebarOption.module.css'
const SidebarOption = (props) => {
  return (
    <div className={`${classes['sidebar-option']} ${props.className}`}>
      <props.icon />
      <span className={classes.text}>{props.text}</span>
    </div>
  )
}

export default SidebarOption
