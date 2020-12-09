import React from "react";
import useEventListener from "../../../hooks/useEventListener";
import {KINDHEALTH_HOME, SCREEN_KEYS} from "../../../constants";

function validate () {
    this.value=this.value.replace(/[^\d]/,'')
}

const handleKeyPress = function (onChangeScreen) {
  return function ({ key }) {
    console.log(key);
    // First section only:
    switch (key) {
      case "\n":
        onChangeScreen(SCREEN_KEYS.SCREEN_THREE);
        break;
      default:
        return;
    }
    // Second section:
    if (Number(key)) {
      // onChangeScreen(SCREEN_KEYS.SCREEN_THREE);
      console.log('Next screen!');
    } else {
      // Exit the screen, or  go back to zip code; maybe check for ESC key?
      return;
    }
  };
};

const showCounties = function (zip) {
  if (zip === 123) {
    return (<ScreenTwo/>)
  }
}

const ScreenTwo = ({ onChangeScreen }) => {
  console.log(onChangeScreen); // Log this guy for now... Will push us to screen 3
  useEventListener("keydown", handleKeyPress(onChangeScreen));
  return (
    <>
      <p>
        Excellent! What is your zip code?
        <input type="text" className="zip_code" maxLength="5"/> (Numbers only)
        <br />
      </p>
      <p style={{ marginBottom: "10px" }}>
        * Enter Zip code and press ENTER to continue!
      </p>
      {/* API call here to get County options... */}
      {/* Hide this next section until they submit */}
      <p>
        {/* Mocked counties */}
        {/*{{showCounties(123)}}*/}
        <p>
          Which county are you in?
        </p>
        <p style={{ marginBottom: "10px" }}>* Press 1 for "Travis County"</p>
        <p style={{ marginTop: "0" }}>* Press 2 for "Mueller County"</p>
        <p style={{ marginBottom: "10px" }}>
          * Press the key for your county!
        </p>
      </p>
    </>
  );
};

export default ScreenTwo;
