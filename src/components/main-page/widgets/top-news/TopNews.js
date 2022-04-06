import classes from './TopNews.module.css';
import Logo from '../../../ui/Logo';
import News from './News';
import Trending from './Trending';
const TopNews = (props) => {
  const source = {
    logo: <Logo />,
    name: 'twitter-news',
    puplishTime: '1 hour ago',
    image: 'https://i.ytimg.com/vi/3k_nckeoACA/hqdefault.jpg',
    title: 'مصرع قيصر في ظروف غامضة... محي اسماعيل',
  };

  const trendingList = [
    {
      id: 't1',
      trend: 'Github',
      desc: 'Trending in Egypt',
      tweetsNumber: '25k tweets',
    },
    {
      id: 't2',
      trend: 'الاهلي',
      desc: 'Trending in Egypt',
      tweetsNumber: '21k tweets',
    },
  ];
  const newsList = [
    {
      id: 'n1',
      logo: <Logo />,
      name: 'twitter-news',
      puplishTime: '1 hour ago',
      image: 'https://i.ytimg.com/vi/3k_nckeoACA/hqdefault.jpg',
      title: 'مصرع قيصر في ظروف غامضة... محي اسماعيل',
    },
    {
      id: 'n2',
      logo: <Logo />,
      name: 'twitter-news',
      puplishTime: '1 hour ago',
      image: 'https://i.ytimg.com/vi/3k_nckeoACA/hqdefault.jpg',
      title: 'مصرع قيصر في ظروف غامضة... محي اسماعيل',
    },
  ];

  const news = newsList.map((item, index) => (
    <News source={{ ...item }} key={index} />
  ));
  const trending = trendingList.map((trend, index) => (
    <Trending trending={{ ...trend }} key={index} />
  ));
  return (
    <div className={classes.news}>
      <h3 className={classes['news-header']}>What's happening</h3>
      {news}
      {trending}
      <div className={classes['show-more']}>
        <button className={classes['show-more']}>Show more</button>
      </div>
    </div>
  );
};

export default TopNews;
