import React, { Component } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

export default class EditExperienceModal extends Component {
  state = {
    experience: {
      role: this.props.experience.role,
      company: this.props.experience.company,
      area: this.props.experience.area,
      startDate: this.props.experience.startDate,
      endDate: this.props.experience.endDate,
      description: this.props.experience.description,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUserExperience(this.state.experience);
  };

  handleInput = (e) => {
    let id = e.target.id;
    this.setState({
      experience: {
        ...this.state.experience,
        [id]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Modal {...this.props}>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header>
              <Modal.Title>Add experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Title*</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  id="role"
                  placeholder="Ex. Retail Sales Manager"
                  required
                  value={this.state.experience.role}
                  onChange={this.handleInput}
                ></Form.Control>
                <Form.Label>Employment type</Form.Label>
                <Form.Control className="mb-3" as="select">
                  <option>-</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Self-employed</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label className="mt-3">Company*</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Ex. Microsoft"
                  id="company"
                  value={this.state.experience.company}
                  onChange={this.handleInput}
                  required
                ></Form.Control>

                <Form.Label>Location</Form.Label>
                <Form.Control
                  className="mb-3"
                  type="text"
                  id="area"
                  placeholder="Ex. London, United Kingdom"
                  value={this.state.experience.area}
                  onChange={this.handleInput}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="I am currently working in this role"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  value={this.state.experience.startDate}
                  onChange={this.handleInput}
                  required
                ></Form.Control>
                <Form.Label>End Date*</Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  value={this.state.experience.endDate}
                  onChange={this.handleInput}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Update my industry" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Update my headline" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="description"
                  value={this.state.experience.description}
                  onChange={this.handleInput}
                  required
                />
              </Form.Group>
              <small>Media</small>
              <small>
                Add or link to external documents, photos, sites, videos, and
                presentations.
              </small>
              <Row className=" justify-content-around">
                <Col>
                  <Button variant="primary" className="w-100 rounded-pill">
                    Upload
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="outline-primary"
                    className="w-100 rounded-pill"
                  >
                    Link
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Row>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="If enabled, your network may be informed of job changes, education changes, and work anniversaries. Learn how these are shared and when"
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" className="rounded-pill" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
