import { Container } from "@material-ui/core";
import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Col, Row } from "react-bootstrap";
import NewsFeed from "./NewsFeed";
import Header from "./Header";
import Follow from "./Follow";
import SideBar from "./SideBar";
import "./HomePage.css";

export default class HomePage extends Component {
  state = {
    posts: [],
    userInfo: {},
    users: [],
    isLoading: false,
  };

  getUsers = async () => {
    this.setState({ isLoading: true });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ users: data.reverse().slice(0, 20) });
      } else {
        console.log("Error while fetching users");
      }
    } catch (error) {
      console.log(error);
    }
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

  addPosts = async (post, pic) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        this.addPictureToPost(data._id, pic);
      } else {
        console.log("Error while adding post");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        this.setState({ posts: data.reverse() });
      } else {
        console.log("Error while fetching posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  editPosts = async (post, postId) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        console.log("post edited");
        this.getPosts();
      } else {
        console.log("Error while adding post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  deletePosts = async (postId) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        console.log("post deleted");
        this.getPosts();
      } else {
        console.log("Error while deleting post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  addPictureToPost = async (postId, pic) => {
    let formData = new FormData();
    formData.append("post", pic);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMTk1ZTZmZDIyODAwMTUzZmRiYWYiLCJpYXQiOjE2MTc2OTcxMTksImV4cCI6MTYxODkwNjcxOX0.Cf16ByRhKv9VhM7o3j_Z2zkXHkrjpT88O9M26Cy9yN8",
          },
        }
      );

      if (response.ok) {
        this.getPosts();
      } else {
        console.log("ERROR WHILE ADDING POST PICTURE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getPosts();
    this.getUserInfo();
    this.getUsers();
  };
  render() {
    return (
      <>
        {this.state.posts.length === 0 && (
          <div className="d-flex justify-content-center">
            <LoadingSpinner />
          </div>
        )}
        {this.state.posts.length > 0 && (
          <>
            <br className="delete_this" />
            <br />
            <br />
            <Container>
              <Row>
                <Col xs={2} className="px-0 side_bar">
                  <SideBar userInfo={this.state.userInfo} />
                </Col>
                <Col
                  className="news_feed"
                  style={{ paddingRight: 0, paddingLeft: 0 }}
                  xs={12}
                  md={6}
                >
                  <NewsFeed
                    userInfo={this.state.userInfo}
                    posts={this.state.posts}
                    addPosts={this.addPosts}
                    editPosts={this.editPosts}
                    deletePosts={this.deletePosts}
                  />
                </Col>
                <Col
                  className="follow"
                  style={{ paddingRight: 0, paddingLeft: 0 }}
                  xs={4}
                >
                  <Follow users={this.state.users} />
                </Col>
              </Row>
            </Container>
          </>
        )}
      </>
    );
  }
}
