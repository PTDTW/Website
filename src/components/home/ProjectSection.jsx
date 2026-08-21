import React from "react";

const defaultProjectCards = [
  {
    title: "Twcampus",
    subtitle: "首席公關",
    desc: "與朋友共同合夥，扮演公關角色，學習如何處理合作以及對外形象管理等相關實務。",
    image: "/Project/twcampus.png",
    col: 2,
    row: 2,
    href: "https://twcampus.org/"
  },
  {
    title: "會考霸｜KaoBar",
    subtitle: "透過合作製作多媒體影片",
    desc: "繪本與情境教學計畫。",
    image: "/Project/kaobar.png",
    col: 1,
    row: 2,
    href: "https://www.instagram.com/the_pros_with_bros/reel/DM66Fbvz1Ld/"
  },
  {
    title: "從說故事開始的理財課",
    subtitle: "透過繪本故事以及話劇課程，教導國小生著作權觀念。",
    desc: "學習歷程展示平台。",
    image: "/Project/vsr.jpg",
    col: 1,
    row: 1,
    href: "https://youtu.be/MHcHgKlKR8k?si=bRXTVA7AFDVhJHR2"
  },
  {
    title: "一個月的數位斷食",
    subtitle: "自主學習成果",
    desc: "學生創作者團隊。",
    image: "/Project/profolio.png",
    col: 1,
    row: 2,
    href: "https://twpea.org/wp-content/uploads/2026/07/CG000001%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E6%88%90%E6%9E%9C%E6%8A%80%E9%AB%98%E7%B5%84_%E5%B8%82%E7%AB%8B%E4%B8%89%E9%87%8D%E5%95%86%E5%B7%A5_%E5%94%90%E5%90%8C%E5%AD%B8_%E3%80%8C%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E6%88%90%E6%9E%9C%E3%80%8D%E4%B8%80%E5%80%8B%E6%9C%88%E7%9A%84%E6%95%B8%E4%BD%8D%E6%96%B7%E9%A3%9F.pdf"
  },
  {
    title: "Datasphere 官網",
    subtitle: "協助一間託管公司開發官網",
    desc: "學生自治與公共參與。",
    image: "/Project/dataspare.png",
    col: 1,
    row: 1,
    href: "https://datasphere.studio/"
  },
  {
    title: "第六十四屆全國科展",
    subtitle: "曾經嘗試學習理化並實際進行實驗.",
    desc: "第六十四屆全國科展",
    image: "/Project/science.jpg",
    col: 2,
    row: 1,
    href: "https://www.ntsec.edu.tw/science/detail.aspx?a=90&cat=136&sid=21676"
  },
];

const ProjectSection = ({ cards = defaultProjectCards }) => {
  return (
    <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rb:10px">
      <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
        作品或專案
      </div>

      <div className="mt:18px"></div>
      <div className="project-grid grid gap:12px">
        {
          cards.map((card, i) => (
            <div
              key={i}
              className="rel overflow:hidden r:22px cursor:pointer translateY(-16px):hover ~all|0.4s"
              style={{
                gridColumn: `span ${card.col}`,
                gridRow: `span ${card.row}`,
              }}
              onClick={() => {
                if (card.href && card.href !== "#") {
                  window.open(card.href, "_blank", "noopener,noreferrer");
                }
              }}
            >

              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="abs inset:0 w:full h:full object-fit:cover" />
              <div
                className="abs inset:0"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,.8))"
                }}
              />


              <div
                className="abs left:20px bottom:20px color:white"
              >

                <div className="f:26px font-weight:bold">
                  {card.title}
                </div>

                <div className="f:14px opacity:.7">
                  {card.subtitle}
                </div>

              </div>

            </div>

          ))
        }

      </div>
    </div>
  );
};

export default ProjectSection;
