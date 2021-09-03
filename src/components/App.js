import { Component } from "react";
import TopBar from "./TopBar";
import MainPane from "./MainPane";
import LargePane from "./LargePane";

import "styles/App.scss";

class App extends Component {
  render() {
    return (
      <div className="tc_App">
        <TopBar />
        <LargePane />
        <MainPane />
      </div>
    );
  }
}

export default App;
