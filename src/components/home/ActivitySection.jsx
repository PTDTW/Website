import React from "react";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: "5+", label: "計畫參與" },
  { value: "2年", label: "教育經驗" },
];

const community = [
  "第五屆eP校園大使 — 活動執行組",
  "SITCON 2025 學生計算機年會 — 與會者",
  "Instagram 117統測倒數 — 協助小編",
];

const ActivitySection = () => {
  return (
    <section className="home-activity-grid">
      <div className="home-card home-card--activity">
        <SectionTitle title="個人動態" />
        <div className="home-stat-list">
          {stats.map((stat, index) => (
            <div key={index} className="home-stat-card">
              <img src={index === 0 ? "/images/data_banner01.jpg" : "/images/data_banner02.jpg"} alt={stat.label} className="home-stat-image" />
              <div className="home-stat-overlay" />
              <div className="home-stat-content">
                <div className="home-stat-value">{stat.value}</div>
                <div className="home-stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-card home-card--activity">
        <SectionTitle title="社群參與" />
        <ul className="home-community-list">
          {community.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivitySection;
