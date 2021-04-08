import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import Header from "./Header";
import Follow from "./Follow";
import SideBar from "./SideBar";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <br className="delete_this" />
        <br />
        <br />
        <Container>
          <Row>
            <Col className="side_bar" style={{ paddingRight: 0 }} xs={2}>
              <SideBar />
            </Col>
            <Col
              className="news_feed"
              style={{ paddingRight: 0, paddingLeft: 0 }}
              xs={12}
              md={6}
            >
              <NewsFeed />
            </Col>
            <Col
              className="follow"
              style={{ paddingRight: 0, paddingLeft: 0 }}
              xs={4}
            >
              <Follow />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
