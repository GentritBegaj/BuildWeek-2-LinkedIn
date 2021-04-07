import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Follow from "./Components/Follow";
import Footer from "./Components/Footer";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}></Col>
        <Col xs={4}>
          {" "}
          <Follow />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
