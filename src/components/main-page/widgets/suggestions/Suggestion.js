import Button from '../../../ui/Button'
import UserImg from '../../../ui/UserImg'
import classes from './Suggestion.module.css'

const Suggestion = ({ user }) => {
  return (
    <div className={classes.suggestion}>
      <div className={classes['user']}>
        <div className={classes['user-image']}>
          <UserImg src={user.image} alt='user image' />
        </div>
        <div className={classes['user-info']}>
          <h5 className={classes.name}>{user.name}</h5>
          <span className={classes.username}> {user.username}</span>
        </div>
      </div>
      <div className={classes.follow}>
        <Button>Follow</Button>
      </div>
    </div>
  )
}
export default Suggestion
