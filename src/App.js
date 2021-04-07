import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
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
