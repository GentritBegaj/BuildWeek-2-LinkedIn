import React, { Component } from "react";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BallotIcon from "@material-ui/icons/Ballot";
import "./CreatePost.css";
import { Container, Row, Col } from "react-bootstrap";

export default class CreatePost extends Component {
  state = {
    postObj: {
      text: "",
    },
  };

  handleSubmit = (e) => {
    console.log(this.state.postObj);
    e.preventDefault();
    this.props.addPosts(this.state.postObj);
    this.setState({ postObj: { text: "" } });
  };

  render() {
    return (
      <Container className="start-post-wrapper">
        <Row>
          <Col xs={12} lg={2} className="picture-div">
            <img src={this.props.userInfo.image} alt="profile-pic" />
          </Col>
          <Col xs={12} lg={10} className="input-div">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="text"
                placeholder="Start a post"
                value={this.state.postObj.text}
                onChange={(e) =>
                  this.setState({
                    postObj: {
                      ...this.state.postObj,
                      [e.target.id]: e.target.value,
                    },
                  })
                }
              />
              <button type="submit">Send</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="input-options-div">
            <InputOption Icon={ImageIcon} title={"Photo"} color="#7085F9" />
            <InputOption Icon={YouTubeIcon} title={"Video"} color="#E7A33E" />
            <InputOption Icon={DateRangeIcon} title={"Event"} color="#C0CBCD" />
            <InputOption
              Icon={BallotIcon}
              title={"Write Article"}
              color="#7FC15E"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
