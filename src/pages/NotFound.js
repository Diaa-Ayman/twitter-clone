import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='centered'>
      <h1>Enter a valid URL</h1>
      <h4>
        You have to sign in first, or if you don't have account you can create
        one
      </h4>
      <div className='leave'>
        <Link to='/twitter'>
          <Button>Go to main page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
