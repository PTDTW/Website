import React from "react";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <section className="home-card home-card--contact">
      <SectionTitle title="聯絡我" />
      <div className="home-contact-list">
        <a href="mailto:tytytyt6372@gmail.com" className="home-contact-item">
          <div className="home-contact-icon">
            <i className="bi bi-envelope" />
          </div>
          <div>
            <div className="home-contact-label">Email</div>
            <div className="home-contact-value">tytytyt6372@gmail.com</div>
          </div>
        </a>

        <a href="https://instagram.com/ptd.tw_" target="_blank" rel="noreferrer" className="home-contact-item">
          <div className="home-contact-icon">
            <i className="bi bi-instagram" />
          </div>
          <div>
            <div className="home-contact-label">Instagram</div>
            <div className="home-contact-value">@ptd.tw_</div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
