import React from "react";
import { KINDHEALTH_HOME, SCREEN_KEYS } from "../../../constants";
import useEventListener from "../../../hooks/useEventListener";

const handleKeyPress = function (onChangeScreen) {
  return function ({ key }) {
    switch (key) {
      case "1":
        onChangeScreen(SCREEN_KEYS.SCREEN_TWO);
        break;
      case "2":
        window.location.href = `${KINDHEALTH_HOME}/products`;
        break;
      default:
        return;
    }
  };
};

const ScreenOne = ({ onChangeScreen }) => {
  useEventListener("keydown", handleKeyPress(onChangeScreen));
  return (
    <>
      <p>
        An error has occurred, we couldn't find the page you are looking for.{" "}
        <br />
        Would you like us to find you an insurance plan?
      </p>
      <p style={{ marginBottom: "10px" }}>* Press 1 to continue</p>
      <p style={{ marginTop: "0" }}>* Press 2 to go back home</p>
    </>
  );
};

export default ScreenOne;
