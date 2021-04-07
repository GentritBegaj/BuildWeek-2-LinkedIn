import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import Header from "./Header";
import Follow from "./Follow";
import SideBar from "./SideBar";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={2}>
              <SideBar />
            </Col>
            <Col xs={6}>
              <NewsFeed />
            </Col>
            <Col xs={4}>
              <Follow />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
