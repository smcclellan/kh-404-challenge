import React from "react";
import useEventListener from "../../../hooks/useEventListener";
import {SCREEN_KEYS} from "../../../constants";

function validate () {
    this.value=this.value.replace(/[^\d]/,'')
}

const handleKeyPress = function (onChangeScreen) {
  return function ({ key }) {
    console.log(key);
    switch (key) {
      case "\n":
        onChangeScreen(SCREEN_KEYS.SCREEN_THREE);
        break;
      default:
        return;
    }
  };
};

const ScreenThree = ({ onChangeScreen }) => {
  console.log(onChangeScreen); // Log this guy for now... Will push us to screen 4
  useEventListener("keydown", handleKeyPress(onChangeScreen));
  return (
    <>
      <p>
        Excellent! How old are you?
        <input type="text" className="age" maxLength="3"/> (Numbers only)
        <br />
        {/*would you like us to find your an insurance plan just for you?*/}
      </p>
      <p style={{ marginBottom: "10px" }}>
        * Enter Zip code and press ENTER to continue!
      </p>
    </>
  );
};

export default ScreenThree;
