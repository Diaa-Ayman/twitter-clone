import { BsFillPersonCheckFill } from 'react-icons/bs'
import { GoMention } from 'react-icons/go'
import { MdOutlinePublic } from 'react-icons/md'
import Card from '../../../ui/Card'
import Input from '../../../ui/Input'
import classes from './WhoReplyCard.module.css'
import { IconContext } from 'react-icons'

const option1 = (
  <div>
    <MdOutlinePublic className={classes['who-reply-card-icon']} />
    <span>Everyone</span>
  </div>
)
const option2 = (
  <div>
    <BsFillPersonCheckFill className={classes['who-reply-card-icon']} />
    <span>People you follow</span>
  </div>
)
const option3 = (
  <div>
    <GoMention className={classes['who-reply-card-icon']} />
    <span>Only people you mention</span>
  </div>
)
const WhoReplyCard = (props) => {
  return (
    <Card className={classes['who-reply-card']}>
      <h4 className={classes['who-reply-card-header']}>Who can Reply?</h4>
      <div className={classes.guide}>
        <p>Choose who can reply to this Tweet. </p>
        <p>Anyone mentioned can always reply.</p>
      </div>
      <div className={classes.selection}>
        <div className={classes.option1}>
          <input
            hidden
            type='radio'
            className={classes['who-reply-input']}
            id='o1'
            name='whoReply'
            value='o1'
          />
          <label htmlFor='o1'>{option1}</label>
        </div>
        <div className={classes.option2}>
          <input
            hidden
            type='radio'
            className={classes['who-reply-input']}
            id='o2'
            name='whoReply'
            value='o2'
          />
          <label htmlFor='o2'>{option2}</label>
        </div>
        <div className={classes.option3}>
          <input
            hidden
            type='radio'
            className={classes['who-reply-input']}
            id='o3'
            name='whoReply'
            value='o3'
          />
          <label htmlFor='o3'>{option3}</label>
        </div>
      </div>
    </Card>
  )
}

export default WhoReplyCard
