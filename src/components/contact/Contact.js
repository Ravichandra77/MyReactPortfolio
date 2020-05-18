
import React from 'react';
import "./contact.css";
import {Form, Button} from "react-bootstrap";

export default class ContactComponent extends React.Component {
    render() {
        return (
          <div className="contact page bg-white">
          <div className="container">
            <div className="row m-0">
              <div className="heading">
                <h2>Contact Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-heading">
                  <h3>Fill your details below</h3>
                </div>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Control type="text" required />
                    <Form.Label>Email </Form.Label>
                  </Form.Group>
      
                  <Form.Group controlId="password">
                    <Form.Control type="password" required />
                    <Form.Label>Password</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="msg">
                    <Form.Control as="textarea" rows="3" required/>
                    <Form.Label>Enter your message</Form.Label>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </div>
              <div className="col-md-6">
                <iframe title="map" className="map border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0146276334367!2d77.53520735005864!3d12.97091569081145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddddd478ef1%3A0x4bbb935360f87b7a!2sVijayanagar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1587745211018!5m2!1sen!2sin"
                  width="600" aria-hidden="false"></iframe>
              </div>
            </div>
          </div>
        </div>
        )
    }
}
