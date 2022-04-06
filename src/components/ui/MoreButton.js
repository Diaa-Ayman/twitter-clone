import classes from './MoreButton.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const MoreButton = (props) => {
  return (
    <div className={`${classes.control} ${props.className}`}>
      <MoreHorizIcon sx={{ width: '25px', height: ' 25px' }} />
    </div>
  );
};

export default MoreButton;
