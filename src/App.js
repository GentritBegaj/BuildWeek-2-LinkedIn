import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./components/Me";
import Header from "./components/Header";
import Profile from "./components/Profile";
// import ProfilePage from "./ProfilePage";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Header />
      </div>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/me" render={(routerProps) => <Me {...routerProps} />} />
        <Route
          path="/user/:id"
          render={(routerProps) => <Profile {...routerProps} />}
        />
      </Router>
    </>
  );
}

export default App;
