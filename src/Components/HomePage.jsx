import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import Header from "./Header";
import Follow from "./Follow";
import SideBar from "./SideBar";

export default class HomePage extends Component {
  state = {
    posts: [],
    userInfo: {},
  };

  // state = {
  //   userInfo: {},
  // };
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

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.userInfo._id !== this.state.userInfo._id) {
  //     this.getUserInfo();
  //   }
  // };

  // componentDidMount = () => {
  //   this.getUserInfo();
  // };

  getPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ posts: data });
        console.log("POSTS", this.state.posts);
      } else {
        console.log("Error while fetching posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getPosts();
    this.getUserInfo();
  };
  render() {
    console.log("USERINFOHME", this.state.userInfo);
    return (
      <>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={2} className="px-0">
              <SideBar userInfo={this.state.userInfo} />
            </Col>
            <Col xs={6}>
              <NewsFeed
                userInfo={this.state.userInfo}
                posts={this.state.posts}
              />
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
