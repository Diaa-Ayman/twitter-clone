// import React, { Fragment } from 'react';
// import TakingOff from './components/taking-off/TakingOff';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import classes from './App.module.css';
import Home from './pages/home_page/Home';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';
import NotFound from './pages/NotFound';
import Explore from './pages/home_page/Explore';
import Notifications from './pages/home_page/Notifications';
import LandingPage from './pages/Landing';
import { useSelector } from 'react-redux';
// import SearchCard from './components/main-page/widgets/search-twitter/SearchCard';
// import SignupForm from './components/sign-up/SignupForm';
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className={classes.app}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/twitter' />
        </Route>
        {!isLoggedIn && (
          <Route path='/twitter'>
            <LandingPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path='/home'>
            <Home />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path='/signup'>
            <SignupPage />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path='/signin'>
            <SigninPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path='/explore'>
            <Explore />
          </Route>
        )}
        {isLoggedIn && (
          <Route path='/notifications'>
            <Notifications />
          </Route>
        )}
        <Route path='*'>
          <NotFound />{' '}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
