import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import UserImg from '../../../ui/UserImg';
import OuterInput from './OuterInputs';
import classes from './Tweeting.module.css';
import { GoFileMedia } from 'react-icons/go';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiPoll } from 'react-icons/bi';
import { AiOutlineGif, AiOutlineSchedule } from 'react-icons/ai';
import { useState } from 'react';
import db from '../../../../firebase';
const Tweeting = (props) => {
  const [post, setPost] = useState('');
  const validPost = post.length > 0 || post !== '';

  const [imageURL, setImageURL] = useState('');
  const validURL = imageURL.length > 0 || imageURL !== '';

  const [postImg, setPostImg] = useState(false);

  const showImageInputHandler = () => {
    setPostImg(true);
  };
  const hideImageInputHandler = () => {
    setPostImg(false);
  };
  const submitClasses =
    validPost || validURL
      ? classes.tweet
      : `${classes.tweet} ${classes.invalid}`;
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!validPost) {
      return;
    }
    db.collection('posts').add({
      displayName: 'ziad ayman',
      username: '@ziadayman2222',
      avatar:
        'https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480',
      image: imageURL,
      text: post,
    });
    setPost('');
    setImageURL('');
  };
  return (
    <section className={classes.tweeting}>
      <div className={classes.styling}>
        <div>
          <UserImg
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='my-image'
          />
        </div>
        <form className={classes['input-form']} onSubmit={submitFormHandler}>
          <div className={classes['tweeting-input']}>
            <Input
              onChange={(e) => setPost(e.target.value)}
              className={classes.postInput}
              value={post}
              input={{
                type: 'text',
                placeholder: "What's happening?",
              }}
            />
            {!postImg && (
              <button onClick={showImageInputHandler}>
                <span>Post an Image</span>
              </button>
            )}
            {postImg && (
              <div className={classes.imgURL}>
                <Input
                  onChange={(e) => setImageURL(e.target.value)}
                  className={classes['image-input']}
                  value={imageURL}
                  input={{
                    type: 'text',
                    placeholder: 'Enter Image URL',
                  }}
                />
                <button onClick={hideImageInputHandler}>back</button>
              </div>
            )}
          </div>
          <div></div>
          <footer className={classes['tweeting-submit']}>
            <div className={classes.outerInputs}>
              <OuterInput
                type='file'
                id='media'
                icon={GoFileMedia}
                for='media'
              />
              <OuterInput icon={BsEmojiSmile} />
              <OuterInput icon={BiPoll} />
              <OuterInput icon={AiOutlineGif} />
              <OuterInput icon={AiOutlineSchedule} />
            </div>
            <div>
              {' '}
              {/*  Changing background onWriting */}
              <Button className={submitClasses} type='subimt'>
                Tweet
              </Button>
            </div>
          </footer>
        </form>
      </div>
    </section>
  );
};
export default Tweeting;
