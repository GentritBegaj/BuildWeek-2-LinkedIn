import React from "react";
import "./PromotedContainer.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Col, Container, Row } from "react-bootstrap";

const PromotedContainer = () => {
  return (
    <Container className="promoted-wrapper">
      <Row className="px-2">
        <p>Promoted</p>
        <MoreHorizIcon style={{ cursor: "pointer", marginLeft: "auto" }} />
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <div className="promoted-item">
            <div className="promoted-item-body">
              <div className="promoted-item-image">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560EAQH0Ga4xS8x27A/rightRail-logo-shrink_100_100/0/1617602776951?e=1617818400&v=beta&t=TSoZTrp2zw-iN7FKPlluR6IDnnW_8NEshfwERpZkUVU"
                  alt="img"
                />
              </div>
              <div className="mb-auto">
                <p className="text-muted text-center ">Trading and Investing</p>
                <div className="promoted-item-text">
                  <p>
                    Our investing strategies help you to balance your risk and
                    reward outlook.
                  </p>
                </div>
              </div>
              <div className="promoted-item-link mt-auto mb-2">Learn more</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="promoted-item">
            <div className="promoted-item-body">
              <div className="promoted-item-image">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560EAQEb7CkO9e5e2w/rightRail-logo-shrink_100_100/0/1617624135733?e=1617822000&v=beta&t=Jm1mvQZRq-6-meYW14ef6RdmhL4ZXaHfn0wz7GPLUac"
                  alt="img"
                />
              </div>
              <div className="mb-auto">
                <p className="text-muted text-center ">
                  6,000% ROI opportunity?
                </p>
                <div className="promoted-item-text">
                  <p>
                    Our investing strategies help you to balance your risk and
                    reward outlook.
                  </p>
                </div>
              </div>
              <div className="promoted-item-link mt-auto mb-2">Learn more</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PromotedContainer;
