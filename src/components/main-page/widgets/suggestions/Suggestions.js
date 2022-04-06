import classes from '../top-news/TopNews.module.css';
import Suggestion from './Suggestion';
import me from '../../../../assets/ahmed.jpg';
const Suggestions = (props) => {
  const usersList = [
    {
      id: 'u1',
      name: 'ahmed ayman',
      username: '@ahmedAyman',
      image: me,
    },
    {
      id: 'u2',
      name: 'abouzaid',
      username: '@droos_online',
      image:
        'https://pbs.twimg.com/profile_images/1462130514081501195/4yqTBzjz_400x400.jpg',
    },
    {
      id: 'u2',
      name: 'Omar*عمر',
      username: '@omar9',
      image:
        'https://pbs.twimg.com/profile_images/1449616095464280068/b0nnP0j0_400x400.jpg',
    },
  ];

  const suggestions = usersList.map((user, index) => (
    <Suggestion user={{ ...user }} key={index} />
  ));
  return (
    <div className={classes.suggestions}>
      <h3 className={classes['suggestions-header']}>Who to follow</h3>
      {suggestions}
      <div className={classes['show-more']}>
        <button className={classes['show-more']}>Show more</button>
      </div>
    </div>
  );
};
export default Suggestions;
