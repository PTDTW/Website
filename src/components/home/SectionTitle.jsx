import React from "react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="home-section-heading">
    <div className="home-section-title">{title}</div>
    {subtitle ? <p className="home-section-subtitle">{subtitle}</p> : null}
  </div>
);

export default SectionTitle;
