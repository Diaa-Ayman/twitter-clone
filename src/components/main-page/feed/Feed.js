import { useEffect, useState } from 'react';
import classes from './Feed.module.css';
import Post from './post/Post';
import Tweeting from './tweeting/Tweeting';
import db from '../../../firebase';
//  fun. CHANGING THE ORDER OF THE POSTS UI...

const Feed = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // posts.sort((quoteA, quoteB) => {
  //   return quoteA.id < quoteB.id ? 1 : -1;
  // });

  return (
    <section className={`middle ${classes.feed}`}>
      <div className={classes['head-control']}>
        <div className={classes['feed-header']}>
          <h4>Home</h4>
        </div>
      </div>
      <div className={classes['feed-control']}>
        <Tweeting />
        <div className={classes.posts}>
          {posts.map((post) => (
            <Post
              text={post.text}
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
        </div>
        {/* <div>
        <span>Home</span>
      </div>
      <div>
        <UserImg />
      </div>
      <div>
        <div></div>
        <div></div>
      </div> */}
      </div>
    </section>
  );
};

export default Feed;
