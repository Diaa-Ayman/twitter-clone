import { Link, useHistory } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Logo from '../ui/Logo';
import { useState, useRef } from 'react';
// import SelectInput from './SelectInput';
import classes from './SignupForm.module.css';
import LoadingSpinner from '../LoadingSpinner';
import { signUpURL } from '../../firebase';

// let days = [];
// for (let i = 30; i >= 1; i--) {
//   days.push(i);
// }
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// let years = [];
// for (let j = 2021; j >= 1900; j--) {
//   years.push(j);
// }

const URL = signUpURL;
const SignupForm = (props) => {
  // console.log(days)
  // console.log(years)

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation here

    setIsLoading(true);
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          history.push('/signin');
        }
        const response = res.json();
        response.then((data) => {
          if (data && data.error && data.error.message) {
            let errMessage = data.error.message;
            alert(errMessage);
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  let submitBtn = '';

  if (isLoading) {
    submitBtn = <LoadingSpinner />;
  } else {
    submitBtn = 'Sign up';
  }
  return (
    <Card className={classes['sign-up-card']}>
      <header className={classes['sign-up-header']}>
        <Link to='/twitter'>
          <button className={classes['close-btn']}>x</button>
        </Link>
        <span className={classes['sign-up-header-logo']}>
          <Logo className={classes.logo} />
        </span>
        <span></span>
      </header>
      <form className={classes['sign-up-form']} onSubmit={submitFormHandler}>
        <div>
          <legend>Create new account</legend>
        </div>
        <div className={classes['large-input']}>
          <div className={classes['email-input']}>
            <Input
              ref={emailInputRef}
              input={{
                type: 'email',
                placeholder: 'e-mail',
                id: 'email',
              }}
              className='large-input'
            />
          </div>
          <div className={classes['password-input']}>
            <Input
              ref={passwordInputRef}
              input={{
                type: 'password',
                placeholder: 'password',
                id: 'password',
              }}
              className='large-input'
            />
          </div>
          {/* <div className={classes['email-input']}>
            <Input
              input={{ type: 'email', placeholder: 'E-mail', id: 'email' }}
            />
          </div> */}
        </div>
        {/* <div className={classes['exchange-inputs']} type='button'>
          Use email instead
        </div>{' '}
        <div>
          <div className={classes.info}>
            <h5>Date of bearth</h5>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </div>
          <div className={classes['date-form']}>
            <Input
              className={classes['month-input']}
              input={{
                type: 'month',
                placeholder: 'month',
                id: 'month',
              }}
            />
            <SelectInput className={classes['month-input']} options={months} />
            <SelectInput className={classes['day-input']} options={days} />
            <SelectInput className={classes['year-input']} options={years} />
            <Input
              className={classes['day-input']}
              input={{
                type: 'number',
                placeholder: 'Day',
                min: '1',
                max: '30',
                id: 'day',
              }}
            />
            <Input
              className={classes['year-input']}
              input={{
                type: 'number',
                placeholder: 'year',
                min: '1900',
                max: '2021',
                id: 'year',
              }}
            />
          </div>
        </div> */}
        <div className={classes['sign-up-next']}>
          <Button>{submitBtn}</Button>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;
