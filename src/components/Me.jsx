import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Me.css";

export default class Me extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={8}>
              <div className="profile-wrapper">
                <div className="header-image-wrapper">
                  <div className="profile-pic-wrapper">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQEa6k5GfxuAlg/profile-displayphoto-shrink_100_100/0/1519850458991?e=1623283200&v=beta&t=6b5H71nr2Vkt9dVr6hka1o5hZz5ouWzUmx-qNan9ddo"
                      alt="profile-pic"
                    />
                  </div>
                </div>
                <div className="personal-information-div">
                  <div className="name-wrapper">
                    <h4>Gentrit Begaj</h4>
                    <p>University of Hertfordshire</p>
                  </div>
                  <div className="job-description-wrapper">
                    <p>Newtwork Engineer</p>
                  </div>
                  <div className="location-wrapper">Prishtine, Kosovo</div>
                </div>
              </div>

              <div className="experience-wrapper">
                <div className="d-flex">
                  <p style={{ fontSize: "24px" }}>Experience</p>
                </div>
                <div className="experience-item">
                  <div className="experience-item-image">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C560BAQGspgnhbJjrpg/company-logo_100_100/0/1583169861901?e=1625702400&v=beta&t=wYm1ZAAejMJ771tbQC371YQaBc4V3U5FXlBZxwcW14A"
                      alt="experience-img"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={4}>efscas</Col>
          </Row>
        </Container>
      </>
    );
  }
}
