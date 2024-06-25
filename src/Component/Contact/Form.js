import { useRef, useState } from 'react';

import classes from './Form.module.css';

const isEmpty = (value) => value.trim() === '';


const Form = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    mobile: true,
    message: true,
    email: true,
  });


  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredMobileIsValid = !isEmpty(enteredMobile);
    const enteredMessageIsValid = !isEmpty(enteredMessage);
    const enteredEmailIsValid = !isEmpty(enteredEmail);

    setFormInputsValidity({
      name: enteredNameIsValid,
      mobile: enteredMobileIsValid,
      message: enteredMessageIsValid,
      email: enteredEmailIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredMobileIsValid &&
      enteredMessageIsValid &&
      enteredEmailIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name:enteredName,
        mobile:enteredMobile,
        email:enteredEmail,
        message:enteredMessage
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const mobileControlClasses = `${classes.control} ${
    formInputsValidity.mobile ? '' : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? '' : classes.invalid
  }`;
  const messageControlClasses = `${classes.control} ${
    formInputsValidity.message ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} action="https://formspree.io/f/mqkvkqwd" method="POST">
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} name='name' />
        {!formInputsValidity.name && <p className={classes.textSp}>Please enter your name!</p>}
      </div>
      <div className={mobileControlClasses}>
        <label htmlFor='mobile'>Mobile</label>
        <input type='text' id='mobile' ref={mobileInputRef}  name='mobile'/>
        {!formInputsValidity.mobile && <p className={classes.textSp}>Please enter a valid Number!</p>}
      </div>
      <div className={emailControlClasses}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' ref={emailInputRef} />
        {!formInputsValidity.email && (
          <p className={classes.textSp}>Please enter a valid Email!</p>
        )}
      </div>
      <div className={messageControlClasses}>
        <label htmlFor='message'>Message</label>
        <textarea type='text' id='message'  name='message' cols={40} rows={4} ref={messageInputRef} />
        {!formInputsValidity.message && <p className={classes.textSp}>Please enter your Message Here!</p>}
      </div>
      <div className={classes.actions}>
       
        <button className={classes.submit} type='submit'>Confirm</button>
      </div>
    </form>
  );
};

export default Form;