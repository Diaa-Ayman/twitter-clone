import classes from './Post.module.css';
import UserImg from '../../../ui/UserImg';
import Reactions from './Reactions';
import MoreButton from '../../../ui/MoreButton';
const Post = ({ displayName, username, time, text, image, avatar }) => {
  const isImg = image !== '' || image.trim.length > 0;
  return (
    <article className={classes.post}>
      <div className={classes.content}>
        <div className={classes['user-image']}>
          <UserImg src={avatar} alt='user image' />
        </div>
        <div className={classes.main}>
          <div className={classes.publisher}>
            <div>
              <span className={classes.name}>{displayName}</span>
              <span className={classes.username}>{username}</span>
              <span className={classes.dot}>.</span>
              <span className={classes['puplish-time']}>
                {time}
                just now
              </span>
            </div>
            <div>
              <MoreButton className={classes.more} />
            </div>
          </div>
          <div className={classes['post-content']}>
            <p className={classes['post-text']}>
              {/* Writing in the post */}
              {text}
            </p>

            {isImg && (
              <div className={classes['post-image']}>
                <img src={image} alt='post pic' />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={classes.reactions}>
        <Reactions />
      </div>
    </article>
  );
};
export default Post;
