import React from "react";

const ScreenTwo = ({ onChangeScreen }) => {
  console.log(onChangeScreen); // Log this guy for now... Will push us to screen 3
  return (
    <>
      <p>
        Excellent! What is your zip code?
        <input type="text" className="zip_code" /> (Numbers only)
        <br />
        {/*would you like us to find your an insurance plan just for you?*/}
      </p>
      <p style={{ marginBottom: "10px" }}>
        * Enter Zip code and press ENTER to continue!
      </p>
    </>
  );
};

export default ScreenTwo;
