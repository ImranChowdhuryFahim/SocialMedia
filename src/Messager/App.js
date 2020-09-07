import React, { Component } from "react";
import styles from "./App.css";
import NavBar from "./components/NavBar";
import BodySection from "./components/BodySection";
import { ChatProvider } from "./data";
import ThemeContextProvider, {
  ThemeContext,
} from "./components/providers/ThemeContext";


class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <ChatProvider>
          <div className="Main">
            <NavBar></NavBar>
            <BodySection></BodySection>
          </div>
        </ChatProvider>
      </ThemeContextProvider>
    );
  }
}

export default App;
