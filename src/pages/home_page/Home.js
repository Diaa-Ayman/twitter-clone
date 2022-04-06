import Feed from '../../components/main-page/feed/Feed';
import Sidebar from '../../components/main-page/Sidebar/Sidebar';
import Widgets from '../../components/main-page/widgets/Widgets';
const HomePage = () => {
  return (
    <div className='main-page'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default HomePage;
