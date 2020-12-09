import "./styles/index.scss";
import React, { useState } from "react";
import NavigationButtons from "./components/NavigationButtons";
import ScreenOne from "./components/Screens/One";
import ScreenTwo from "./components/Screens/Two";
import ScreenThree from "./components/Screens/Three";
import { SCREEN_KEYS } from "./constants";

const screens = {
  [SCREEN_KEYS.SCREEN_ONE]: ScreenOne,
  [SCREEN_KEYS.SCREEN_TWO]: ScreenTwo,
  [SCREEN_KEYS.SCREEN_THREE]: ScreenThree,
};

const useScreens = () => {
  const [currentScreen, onChangeScreen] = useState(SCREEN_KEYS.SCREEN_ONE);
  return [currentScreen, onChangeScreen];
};

const App = () => {
  const [currentScreen, onChangeScreen] = useScreens();

  return (
    <main className="bsod container">
      <h1 className="neg title">
        <span className="bg">Error - 404</span>
      </h1>
      {screens[currentScreen]
        ? React.createElement(screens[currentScreen], {
            onChangeScreen,
          })
        : null}
      <NavigationButtons />
    </main>
  );
};

export default App;
