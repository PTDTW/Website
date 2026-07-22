import React from "react";
import SectionTitle from "./SectionTitle";

const projectCards = [
  {
    title: "Twcampus",
    subtitle: "首席公關",
    desc: "與朋友共同合夥，扮演公關角色，學習如何處理合作以及對外形象管理等相關實務。",
    image: "/Project/twcampus.png",
    col: 2,
    row: 2,
  },
  {
    title: "會考霸｜KaoBar",
    subtitle: "透過合作製作多媒體影片",
    desc: "繪本與情境教學計畫。",
    image: "/Project/kaobar.png",
    col: 1,
    row: 2,
  },
  {
    title: "從說故事開始的理財課",
    subtitle: "透過繪本故事以及話劇課程，教導國小生著作權觀念。",
    desc: "學習歷程展示平台。",
    image: "/Project/vsr.jpg",
    col: 1,
    row: 1,
  },
  {
    title: "一個月的數位斷食",
    subtitle: "自主學習成果",
    desc: "學生創作者團隊。",
    image: "/Project/profolio.png",
    col: 1,
    row: 2,
  },
  {
    title: "Datasphere 官網",
    subtitle: "協助一間託管公司開發官網",
    desc: "學生自治與公共參與。",
    image: "/Project/dataspare.png",
    col: 1,
    row: 1,
  },
  {
    title: "第六十四屆全國科展",
    subtitle: "曾經嘗試學習理化並實際進行實驗.",
    desc: "第六十四屆全國科展",
    image: "/Project/science.jpg",
    col: 2,
    row: 1,
  },
];

const ProjectSection = () => {
  return (
    <section className="home-card">
      <SectionTitle title="作品或專案" />
      <div className="home-project-grid">
        {projectCards.map((card, index) => (
          <article key={index} className="home-project-card" style={{ gridColumn: `span ${card.col}`, gridRow: `span ${card.row}` }}>
            <img src={card.image} alt={card.title} className="home-project-image" />
            <div className="home-project-overlay" />
            <div className="home-project-content">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
