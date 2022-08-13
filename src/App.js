import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

function App() {
  return (
    <div>
      <CustomCursor
        targets={[".link", ".custom-css"]}
        customClass="custom-cursor"
        dimensions={50}
        fill="rgb(252, 163, 17)"
        smoothness={{
          movement: 0.3,
          scale: 0.1,
          opacity: 1,
        }}
        targetOpacity={0.5}
      />

      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
