import React, { useContext, useRef } from 'react'
import { CartContext } from '../../StoreContext/CartContext';
import classes from './ProfileForm.module.css'

const ProfileForm = () => {
    const newPasswordInputRef = useRef();

    const { contextValue} =useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        //add validation
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC606xgg6EBWOYZfE4iv41xYa59H83vk0U',{
          method:'POST',
          body:JSON.stringify({
            idToken: contextValue.token,
            password:enteredNewPassword,
            returnSecureToken: true
          }),
          headers:{
            'Content-type':'application/json'
          }   
        }).then(res => {
            //assumption:Always succeeds!
        })
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor='new-password'>New Password</label>
            <input type='password' id='new password' minLength="7" ref={newPasswordInputRef}/>
        </div>
        <div className={classes.action}>
            <button>Change Password</button>
        </div>
    </form>
  )
}

export default ProfileForm