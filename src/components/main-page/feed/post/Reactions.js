import classes from './Reactions.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { AiOutlineRetweet } from 'react-icons/ai';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Reaction = (props) => {
  return (
    <section className={classes.reactions}>
      <div className={`${classes.reaction} ${classes.comment}`}>
        <ModeCommentOutlinedIcon className={classes.icon} />
        <span className={classes.number}>
          {/* Number of reacters */} {props.number}150
        </span>
      </div>
      <div className={`${classes.reaction} ${classes.retweet}`}>
        <AiOutlineRetweet className={classes.icon} />
        <span className={classes.number}>
          {/* Number of reacters */} {props.number}5000
        </span>
      </div>
      <div className={`${classes.reaction} ${classes.fav}`}>
        <FavoriteBorderIcon className={classes.icon} />
        <span className={classes.number}>
          {/* Number of reacters */} {props.number}200
        </span>
      </div>
      <div className={`${classes.reaction} ${classes.share}`}>
        <IosShareOutlinedIcon className={classes.icon} />
        <span className={classes.number}>
          {/* Number of reacters */} {props.number}30
        </span>
      </div>
    </section>
  );
};
export default Reaction;
