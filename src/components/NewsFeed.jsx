import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default class NewsFeed extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <CreatePost
              userInfo={this.props.userInfo}
              addPosts={this.props.addPosts}
            />
            <div
              className="my-2 mx-auto"
              style={{
                width: "90%",
                height: "0",
                border: "1px solid lightgray",
              }}
            ></div>
            {this.props.posts.length === 0 && (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
            {this.props.posts.length > 0 &&
              this.props.posts
                .slice(0, 30)
                .map((post) => (
                  <Post
                    userInfo={this.props.userInfo}
                    key={post._id}
                    postId={post._id}
                    name={post.user.name}
                    surname={post.user.surname}
                    postUserId={post.user._id}
                    description={post.user.title}
                    postBody={post.text}
                    profilePic={post.user.image}
                    postImage={post.image}
                    editPosts={this.props.editPosts}
                    deletePosts={this.props.deletePosts}
                  />
                ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
