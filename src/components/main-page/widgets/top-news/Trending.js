import classes from './Trending.module.css'
import MoreButton from '../../../ui/MoreButton'
const Trending = ({ trending }) => {
  return (
    <div className={classes.trending}>
      <div className={classes.desc}>
        <span className={classes.place}>{trending.desc}</span>
        <MoreButton className={classes.more} />
      </div>
      <div>
        <span className={classes.trend}>#{trending.trend}</span>
      </div>
      <div>
        <span className={classes.number}>{trending.tweetsNumber}</span>
      </div>
    </div>
  )
}

export default Trending
