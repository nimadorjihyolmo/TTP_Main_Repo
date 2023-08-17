import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="bg-light p-5 mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4 contact">Let's Get in Touch</h2><br/>
            <p className="smallParagraph">If you have any questions or feedback about the Weather App, feel free to get in touch!</p>
            <br /> <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-secondary transparent-button">Submit</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-center footer">
              Connect with me on social media:
              <br />
              <a href="https://github.com/nimadorjihyolmo" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" /></a>
              <a href="https://www.linkedin.com/in/nimadsherpa/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-2" /></a>
              <a href="https://www.instagram.com/nimahahahaha/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" className="mx-2" /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
