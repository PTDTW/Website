import React, { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
// import SectionTitle from "./SectionTitle";

const ExperienceSectionCard = [
  // {
  //   title: "會考資源平台",
  //   subtitle: "會考霸｜KaoBar",
  //   desc: "打造一個完全免費的資源整理、題庫提供的平台與入口，期望讓會考生在備考時可以事半功倍。",
  //   image: "/Experience/kaobar.png",
  //   position: "center",
  // },
  {
    title: "社會責任教育",
    subtitle: "新北市技職vsr計畫",
    desc: "熱衷於教育、程式開發與社會責任，希望透過技術創造更多價值。",
    image: "/Experience/vsr.jpg",
    position: "center",
    rwdPosition: "50% 20%"
  },
  {
    title: "學檔教育",
    subtitle: "第六屆金質歷程獎",
    desc: "透過第六屆金質歷程獎的機會，在台上重新介紹個人學習歷程得獎作品，並講述歷程以及心得感想。",
    image: "/Experience/gapc.jpg",
    position: "left",
    rwdPosition: "50% 50%"
  },
  {
    title: "學生自治",
    subtitle: "三重商工班聯會",
    desc: "曾經參加本校三重商工班級聯合會，積極協助校內事務以及學權參與。",
    image: "/Experience/scvs.jpg",
    position: "right",
    rwdPosition: "50% 20%"
  },
];

const ExperienceSection = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg:#121212 font:#fff mt:25px py:22px px:22px rt:10px">
      <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
        興趣參與經驗
      </div>

      <div className="mt:18px">
        <div
          className="flex flex:col@<md gap:12px h:320px h:800px@<md"
        >
          {ExperienceSectionCard.map((card, i) => (
            <div
              key={i}
              className="rel overflow:hidden r:18px cursor:pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                flexGrow:
                  active === null
                    ? 1
                    : active === i
                      ? 5
                      : 1,
                transform:
                  active === i
                    ? "translateY(-4px)"
                    : "translateY(0)",
                transition:
                  "flex-grow .45s cubic-bezier(.2,.8,.2,1), transform .3s ease",
              }}
            >
              {/* Image */}
              <img
                src={card.image}
                className="abs inset:0 w:full h:full object-fit:cover"
                style={{
                  "--object-position": card.position,
                  "--object-position-rwd": card.rwdPosition,
                  objectPosition: "var(--object-position)",
                  transform:
                    active === i
                      ? "scale(1.08)"
                      : "scale(1)",
                  transition: "transform .6s ease",
                }}
              />

              {/* Overlay */}
              <div
                className="abs inset:0"
                style={{
                  background:
                    active === i
                      ? "linear-gradient(180deg, transparent 20%, rgba(0,0,0,.82))"
                      : "linear-gradient(180deg, transparent 45%, rgba(0,0,0,.55))",
                  transition: ".35s",
                }}
              />

              {/* Content */}
              <div className="abs left:22px right:22px bottom:24px color:white">

                {/* 中文 */}
                <div
                  className="font-weight:bold"
                  style={{
                    fontSize: "30px",
                    transition: ".3s",
                  }}
                >
                  {card.title}
                </div>

                {/* 英文 */}
                <div
                  style={{
                    fontSize: "15px",
                    opacity: .75,
                    marginTop: 4,
                  }}
                >
                  {card.subtitle}
                </div>

                {/* Description */}
                <div
                  style={{
                    maxHeight:
                      active === i
                        ? "120px"
                        : "0px",
                    opacity:
                      active === i
                        ? 1
                        : 0,
                    overflow: "hidden",
                    transform:
                      active === i
                        ? "translateY(0)"
                        : "translateY(20px)",
                    transition:
                      "all .35s ease",
                  }}
                >
                  <p
                    style={{
                      marginTop: 16,
                      lineHeight: 1.8,
                      color: "#ddd",
                      fontSize: 15,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
