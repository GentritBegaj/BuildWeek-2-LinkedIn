import NewsFeed from "./components/NewsFeed";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./components/Me";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={NewsFeed} />
        <Route path="/me" exact component={Me} />
      </Router>
    </div>
  );
}

export default App;
