import classes from './News.module.css'

const News = ({ source }) => {
  return (
    <div className={classes.news}>
      <div className={classes.image}>
        <img src={source.image} alt='some alt' />
      </div>
      <div className={classes.description}>
        <div className={classes['news-source']}>
          <div className={classes.source}>
            <span className={classes['source-logo']}>{source.logo}</span>
            <span className={classes['source-name']}>{source.name}</span>
          </div>
          <div className={classes.dot}>.</div>
          <div className={classes['puplish-time']}>
            <span>{source.puplishTime}</span>
          </div>
        </div>
        <div className={classes['title']}>
          <span className={classes['news-title']}>{source.title}</span>
        </div>
      </div>
    </div>
  )
}

export default News
