import React from "react";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./components/Me";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className="d-flex justify-content-center">
            <Header
            // userInfo={this.state.userInfo}
            />
          </div>
          <Route
            path="/"
            exact
            component={HomePage}
            // userInfo={this.state.userInfo}
          />
          <Route path="/me" render={(routerProps) => <Me {...routerProps} />} />
          <Route
            path="/user/:id"
            render={(routerProps) => <Profile {...routerProps} />}
          />
        </Router>
      </>
    );
  }
}

export default App;
