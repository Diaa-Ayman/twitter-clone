import {
  // Home,
  NotificationsNone,
  Tag,
  MailOutlined,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  // MoreHoriz,
} from '@mui/icons-material';
import { RiHome7Fill } from 'react-icons/ri';
import TwitterIcon from '@mui/icons-material/Twitter';
import { CgMoreO } from 'react-icons/cg';
import Button from '../../ui/Button';
// import Logo from '../../ui/Logo';
import classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/auth-store';

// const home = (
//   <svg
//     viewBox='0 0 24 24'
//     aria-hidden='true'
//     class='r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr'
//     className={classes.homee}
//   >
//     <g>
//       <path d='M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z'></path>
//     </g>
//   </svg>
// )
const Sidebar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.replace('/twitter');
  };
  return (
    <section className={classes.sidebar}>
      <div className={classes['sidebar-control']}>
        <TwitterIcon
          sx={{
            color: '#1d9bf0',
            fontSize: '35px',
            marginLeft: '15px',
            marginBottom: '15px',
          }}
        />
        <NavLink activeClassName={classes.activeLink} to='/home'>
          <SidebarOption
            text='Home'
            icon={RiHome7Fill}
            className={classes.active}
          />
        </NavLink>
        <NavLink activeClassName={classes.activeLink} to='/explore'>
          <SidebarOption text='Explore' icon={Tag} />
        </NavLink>
        <NavLink activeClassName={classes.activeLink} to='/notifications'>
          <SidebarOption text='Notifications' icon={NotificationsNone} />
        </NavLink>
        {/* From here to finish */}
        <SidebarOption text='Messages' icon={MailOutlined} />{' '}
        <SidebarOption text='Bookmarks' icon={BookmarkBorder} />
        <SidebarOption text='Lists' icon={ListAlt} />
        <SidebarOption text='Profile' icon={PermIdentity} />
        <SidebarOption text='More' icon={CgMoreO} />
        <Button className={classes.tweet}>Tweet</Button>
        <div className={classes.logout}>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
