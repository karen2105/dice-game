import React, { Component } from 'react';
import UserSelect from "@/components/user-selection";
import Game from "@/containers/game";
import Goodbye from "@/components/goodbye";
import '@/style/main.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path="/" component={UserSelect} />
          <Route path="/game" component={Game} />
          <Route path="/goodbye" component={Goodbye} />

          <footer>
            <span className="footer">Karen Lorena Alonso Zarate - 2018</span>
          </footer>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
