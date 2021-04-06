import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default class NewsFeed extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={2}>sdfasdcfad</Col>
          <Col xs={6}>
            <CreatePost />
            <div
              className="my-5 mx-auto"
              style={{
                width: "90%",
                height: "0",
                border: "1px solid lightgray",
              }}
            ></div>
            <Post
              name="Gentrit Begaj"
              description="Web Developer"
              postBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQEa6k5GfxuAlg/profile-displayphoto-shrink_100_100/0/1519850458991?e=1623283200&v=beta&t=6b5H71nr2Vkt9dVr6hka1o5hZz5ouWzUmx-qNan9ddo"
              postImage="https://guidetoiceland.imgix.net/4828/x/0/mountains-in-iceland-2?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=1300&s=0a7056d899b0941b2092306b5e5fb542"
            />
            <Post
              name="Gentrit Begaj"
              description="Web Developer"
              postBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQEa6k5GfxuAlg/profile-displayphoto-shrink_100_100/0/1519850458991?e=1623283200&v=beta&t=6b5H71nr2Vkt9dVr6hka1o5hZz5ouWzUmx-qNan9ddo"
              postImage="https://guidetoiceland.imgix.net/4828/x/0/mountains-in-iceland-2?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=1300&s=0a7056d899b0941b2092306b5e5fb542"
            />
            <Post
              name="Gentrit Begaj"
              description="Web Developer"
              postBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              profilePic="https://media-exp1.licdn.com/dms/image/C4E03AQEa6k5GfxuAlg/profile-displayphoto-shrink_100_100/0/1519850458991?e=1623283200&v=beta&t=6b5H71nr2Vkt9dVr6hka1o5hZz5ouWzUmx-qNan9ddo"
              postImage="https://guidetoiceland.imgix.net/4828/x/0/mountains-in-iceland-2?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=1300&s=0a7056d899b0941b2092306b5e5fb542"
            />
          </Col>
          <Col xsx={4}>sdsadc</Col>
        </Row>
      </Container>
    );
  }
}
