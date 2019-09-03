import React, { Component } from 'react';
import UserSelect from "@/components/user-selection";
import Game from "@/containers/game";
import Goodbye from "@/components/goodbye";
import '@/style/main.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={UserSelect} />
            <Route path="/game" component={Game} />
            <Route path="/goodbye" component={Goodbye} />

            <footer>
              <span className="footer">Karen Lorena Alonso Zarate - 2018</span>
            </footer>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}
export default App;
