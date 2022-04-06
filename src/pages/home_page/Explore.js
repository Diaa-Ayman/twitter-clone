import Sidebar from '../../components/main-page/Sidebar/Sidebar';
import Widgets from '../../components/main-page/widgets/Widgets';
const Explore = () => {
  return (
    <div className='main-page'>
      <Sidebar />
      <div className='centered middle'>
        <h3>Explore page</h3>
      </div>
      <Widgets />
    </div>
  );
};

export default Explore;
