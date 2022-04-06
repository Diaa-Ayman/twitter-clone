import classes from './UserImg.module.css'

const UserImg = (props) => {
  return <img className={classes.image} src={props.src} alt={props.alt} />
}

export default UserImg
