import React from 'react';
import '../assets/styles/Contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Let's connect! Reach out via any of the platforms below:</p>

          <div className="contact-links">
            <a href="https://wa.me/+447721903299" target="_blank" rel="noreferrer" className="contact-item">
              <WhatsAppIcon />
              <span>+44 7721903299</span>
            </a>
            <a href="mailto:rmuk4011@gmail.com" className="contact-item">
              <EmailIcon />
              <span>rmuk4011@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ricken-mistry-32bb45317/" target="_blank" rel="noreferrer" className="contact-item">
              <LinkedInIcon />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
