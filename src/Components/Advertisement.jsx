import { Container } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Advertisement.css";

function Advertisement() {
  return (
    <>
      <div className="add"></div>
      <Container>
        <Row>
          <Col>
            <div className="ul_list">
              <ul>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.about"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://about.linkedin.com"
                    id="compactfooter-about"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>About</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Accessibility</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Help Center</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Privacy & Terms</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Ad Choices</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Advertising</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Business Services</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>Get the LinkedIn</span>
                  </a>
                </li>
                <li class="global-footer-compact__item">
                  <a
                    tabindex="0"
                    data-control-name="compactfooter.accessibility"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/accessibility"
                    id="compactfooter-accessibility"
                    class="global-footer__link t-12 t-normal ember-view"
                  >
                    <span>More</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }} className="ml-5">
          <img
            className="img_footer_home"
            src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg"
            alt=""
          />
          <span className="copyright">LinkedIn Corporation © 2021</span>
        </Row>
      </Container>
    </>
  );
}

export default Advertisement;
