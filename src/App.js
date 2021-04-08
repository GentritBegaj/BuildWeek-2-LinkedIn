import React from "react";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./components/Me";
import Header from "./components/Header";
import Profile from "./components/Profile";

class App extends React.Component {
  state = {
    userInfo: {},
  };
  getUserInfo = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ userInfo: data });
      } else {
        console.log("Error while fetching profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getUserInfo();
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Header userInfo={this.state.userInfo} />
        </div>
        <Router>
          <Route
            path="/"
            exact
            component={HomePage}
            userInfo={this.state.userInfo}
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
