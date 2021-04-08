import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
            {this.props.posts.length > 0 &&
              this.props.posts
                .slice(0, 30)
                .map((post) => (
                  <Post
                    key={post._id}
                    name={post.user.name}
                    surname={post.user.surname}
                    description={post.user.title}
                    postBody={post.text}
                    profilePic={post.user.image}
                    postImage="https://guidetoiceland.imgix.net/4828/x/0/mountains-in-iceland-2?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=1300&s=0a7056d899b0941b2092306b5e5fb542"
                  />
                ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
