import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./components/Me";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
        </Container>

        <Route path="/" exact component={HomePage} />
        <Route path="/me" exact component={Me} />
      </Router>
    </div>
  );
}

export default App;
