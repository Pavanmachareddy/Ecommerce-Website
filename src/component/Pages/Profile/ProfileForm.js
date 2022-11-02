import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../StoreContext/CartContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();

  const { contextValue } = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //add validation
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzCs8RmN9nrIBGq7S29BvVcvef7exgKCo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: contextValue.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then((res) => {
      //assumption:Always succeeds!

      navigate("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
