import classes from './TakingOff.module.css';
import twitter from '../../assets/twitter.png';
import Logo from '../ui/Logo';
import { Row, Col } from 'react-bootstrap';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const TakingOff = (props) => {
  return (
    <section>
      <div className={classes['taking-off']}>
        {/* <Container fluid> */}
        <Row>
          <Col lg='7' sm='12' md='12'>
            <div className={classes.image}>
              <img src={twitter} alt='twitter' />
              <div className={classes.logo}>
                <Logo />
              </div>
            </div>
          </Col>
          <Col lg='5' sm='12' md='12'>
            <div className={classes['signup-links']}>
              <Logo />
              <div className={classes['happening-now']}>
                <span>Happening now</span>
              </div>
              <div className={classes['join-twitter']}>
                <span>Join Twitter today</span>
              </div>
              <div>
                {/* <div className={classes['sign-with-apple']}>
                  <Button>
                    <span>
                      <i className={`${classes.apple} fab fa-apple`}></i>
                    </span>
                    <span>Sign up with Apple</span>
                  </Button>
                </div>

                <div className={classes.or}>
                  <span>or</span>
                </div> */}
                <div className={classes['sign-with-email']}>
                  {' '}
                  <Link to='/signup'>
                    <Button>sign up with email</Button>
                  </Link>
                  <p className={classes['privacy']}>
                    By signing up, you agree to the Terms of Service and Privacy
                    Policy, including Cookie Use.
                  </p>
                </div>
                <div className={classes['have-account']}>
                  <p>Already have an account?</p>
                  <Link to='/signin'>
                    <Button>Sign in</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </div>

      <footer className={classes.links}>
        <div>
          <a href='#'>About</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Help Center</a>
          <a href='#'>Term of Services</a>
          <a href='#'>Cookie Policy</a>
          <a href='#'>Ads Info</a>
          <a href='#'>Blog</a>
          <a href='#'>Status</a>
          <a href='#'>Careers</a>
          <a href='#'>Brand Resources</a>
          <a href='#'>Advertising</a>
          <a href='#'>Marketing</a>
          <a href='#'>Twitter Of Bussines</a>
          <a href='#'>Developers</a>
          <a href='#'>Directory</a>
          <a href='#'>Settings</a>
        </div>
        <p>© 2021 Twitter, Inc.</p>
      </footer>
    </section>
  );
};
export default TakingOff;
