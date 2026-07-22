"use client";
import React, { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
// import ReactMarkdown from 'react:markdown';
import MarkdownViewer from "@/components/Reader/MarkdownViewer"
import { Timeline, Event } from "react-timeline-scribble";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const banners = [
  {
    image: "/images/banner.webp",
    text: "傳遞的不只是知識，而是下一個可能。｜「從故事開始的理財課」新北技職vsr計畫 • 2026/04/15。",
    fit: "cover",
    position: "50% 50%",
  },
  {
    image: "/images/banner02.png",
    text: "緣分總是令人欣慰又感嘆｜「曾經」與好友一同遊玩的Minecraft伺服器剪影 • 2024/06/19",
    fit: "cover",
    position: "50% 50%",
  },
  {
    image: "/images/banner03.jpg",
    text: "志同道合的相遇，是人生中最幸運的事情｜第六屆金質歷程獎，校大夥伴相遇 • 2026/07/18",
    fit: "cover",
    position: "50% 70%",
  }
];

const HeroSection = () => {
  const [hoverName, setHoverName] = useState(false);
  const [expand, setExpand] = useState(false);
  const [banner] = useState(() => {
    const index = Math.floor(Math.random() * banners.length);
    return banners[index];
  });
  return (
    <>
      {/* <div className="h:250px w:100% overflow:hidden flex items:center justify:center mt:30px mx:auto r:10px b:1.2px|solid|#333">
          <img
            src="/images/banner.jpg"
            alt=""
            className="w:full h:full object-fit:cover"
          />
        </div> */}
      <div className="rel mt:30px">
        {/* Hero */}
        <div
          className="
            rel
            w:100%
            overflow:hidden
            rt:10px
            cursor:pointer
          "
          style={{
            height: expand ? "600px" : "200px",
            transition: "height .45s cubic-bezier(.2,.8,.2,1)",
          }}
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}
        >

          {/* Image */}
          <img
            src={banner.image}
            className="w:full h:full object-fit:cover block"
            style={{
              objectPosition: banner.position,
              transform: expand
                ? "scale(1.05)"
                : "scale(1)",
              transition:
                "transform .8s cubic-bezier(.2,.8,.2,1)",
            }}
          />


          {/* Gradient */}
          <div
            className="
              abs
              inset:0
              pointer-events:none
            "
            style={{
              background:
                "linear-gradient(170deg,transparent 45%,rgba(0,0,0,.75))"
            }}
          />


          {/* Caption */}
          <div
            className="
              abs
              right:10px
              bottom:8px
              f:#fff
              z:2
              f:12px
            "
          >
            {banner.text}
          </div>


          {/* Hover Hint */}
          <div
            className="
              abs
              left:50%
              bottom:5%
              z:3
              color:white
            "
            style={{
              transform:
                "translate(-50%,-50%)",
              opacity: expand ? 0 : 1,
              transition: "opacity .3s",
              pointerEvents: "none",
            }}
          >

            <div
              className="
                px:15px
                py:10px
                r:999px
                bg:#ffffff22
                backdrop-filter:blur(10px)
                f:15px
              "
            >
              滑鼠探索 ↓
            </div>

          </div>
        </div>


        {/* Header Info */}
        <div className="abs left:30px left:25%@<md right:30px@>md bottom:-85px bottom:-285px@<md flex jc:space-between flex:col@<md ai:end z:10">

          {/* 左側 Avatar + Info */}
          <div className="flex flex:col@<md ai:end ai:center@<md gap:10px">
            {/* Avatar */}
            <div
              className="w:120px h:120px rel"
              style={{
                perspective: "800px"
              }}
            >
              <div
                className="mt:-20px ml:-20px w:150px h:150px flex ai:center jc:center"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector(".avatar-card").style.transform = "rotateY(-180deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector(".avatar-card").style.transform = "rotateY(0deg)";
                }}
              >
                <div
                  className="avatar-card w:120px h:120px rel transition:500ms"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >

                  {/* 正面 */}
                  <img
                    src="/Avatars/avatar05.jpg"
                    className="abs w:full h:full r:100% b:4px|solid|#050505 bg:white object-fit:cover"
                    style={{
                      backfaceVisibility: "hidden"
                    }}
                  />

                  {/* 背面 */}
                  <img
                    src="/Avatars/avatar05-bg.png"
                    className="abs w:full h:full r:100% b:4px|solid|#050505 bg:white object-fit:cover"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  />

                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="pb:10px color:white">
              <div className="rel mt:4px flex flex:col f:26px overflow:hidden text:center@<md" onMouseEnter={() => setHoverName(true)} onMouseLeave={() => setHoverName(false)}>
                <div
                  className="abs"
                  style={{
                    transform: hoverName
                      ? "translateY(0)"
                      : "translateY(-100%)",
                    transition: "300ms"
                  }}
                >
                  糖豆魚
                </div>

                {/* 原文字 */}
                <div
                  style={{
                    transform: hoverName
                      ? "translateY(100%)"
                      : "translateY(0)",
                    transition: "300ms"
                  }}
                >
                  唐禹平
                </div>
              </div>
              <span className="f:#888 f:16px">@ptd.tw • <span className="f:13">程式開發／教育／社會責任／學習歷程</span></span>
            </div>
          </div>

          {/* 右側 Social */}
          <div className="flex gap:15px pb:15px">
            <a
              href="https://github.com/ptdtw"
              className="flex ai:center jc:center p:10px px:15px r:999px bg:#ffffff15 backdrop-filter:blur(10px) b:1px|solid|#ffffff22 f:#fff text-decoration:none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              &nbsp;&nbsp;Github
            </a>

            <a
              href="https://instagram.com/ptd.tw_"
              className="flex ai:center jc:center p:10px px:15px r:999px bg:#ffffff15 backdrop-filter:blur(10px) b:1px|solid|#ffffff22 f:#fff text-decoration:none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              &nbsp;&nbsp;Instagram
            </a>
          </div>
        </div>
      </div>

      {/* 往下推 */}
      <div className="h:80px h:280px@<md bg:#121212 mt:4px pb:20px rb:0px" />
    </>)
};

const BioSection = () => {
  return (
    <>
      <div className="bg:#121212 font:#fff mt:0px py:22px px:22px rb:10px">
        <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">關於我</div>
        <div className="mt:8px f:#d4d4d4 px:14px f:15.5px">
          嗨！很高興見到你～我目前是一名臺灣學生，目前就讀商管群。平時喜歡胡搞瞎搞，我經營過團隊、探索學生自治、學習網站開發、也熱愛於參與教育甚至是參與社會責任。比起一個人商業分析、技術開發，我更喜歡與其他夥伴一同討論更種點子與想讓，攜手參與教育企劃，一同為下一代創造更好的可能。
          <div className="mt:15px f:#666 f:15px">#前後端開發 #教育參與 #學生自治</div>
        </div>
      </div>
    </>
  );
};

const ActiveAboutCard = [
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

const ActiveAboutSection = () => {
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
          {ActiveAboutCard.map((card, i) => (
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

const ProjectCards = [
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
    <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rb:0px">
      <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
        作品或專案
      </div>

      <div className="mt:18px"></div>
      <div className="project-grid grid gap:12px">
        {
          ProjectCards.map((card, i) => (
            <div
              key={i}
              className="rel overflow:hidden r:22px cursor:pointer translateY(-16px):hover ~all|0.4s"
              style={{
                gridColumn: `span ${card.col}`,
                gridRow: `span ${card.row}`,
              }}
            >

              <img
                src={card.image}
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


const TimelineData = [
  {
    year: "2023",
    title: "新北市科學展覽會",
    desc: "生活應用科特優，進入國展。",
  },
  {
    year: "2025",
    title: "SITCON學生計算機年會",
    desc: "參與學生科技社群交流。",
  },
  {
    year: "2025",
    title: "築夢之地工作室",
    desc: "成立學生創作者團隊。",
  },
  {
    year: "2026",
    title: "技職VSR永續計畫",
    desc: "從故事開始的理財課。",
  },
  {
    year: "2026",
    title: "會考霸",
    desc: "建立教育平台。",
  }
];

const ExperienceData = [
  {
    year: "2023",
    title: "新北市科學展覽會",
    desc: "生活應用科特優，進入國展。",
  },
  {
    year: "2025",
    title: "SITCON學生計算機年會",
    desc: "參與學生科技社群交流。",
  },
  {
    year: "2025",
    title: "築夢之地工作室",
    desc: "成立學生創作者團隊。",
  },
  {
    year: "2026",
    title: "技職VSR永續計畫",
    desc: "從故事開始的理財課。",
  },
  {
    year: "2026",
    title: "會考霸",
    desc: "建立教育平台。",
  }
];

const ExperienceDataline = () => {
  return (
    <>
      <div
        className="flex flex:col@<md gap:5px gap:0px@<md"
      >
        {/* 左側 */}
        <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rbl:10px rbl:0px@<md">
          <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
            個人動態
          </div>

          <div className="mt:18px flex gap:12px">

            {/* Card */}
            <div className="rel flex:1 overflow:hidden r:18px  translateY(-16px):hover ~all|0.4s">

              <img
                src="/images/data_banner01.jpg"
                className="w:full h:240px object-fit:cover"
              />

              {/* 底部漸層 */}
              <div
                className="abs inset:0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)"
                }}
              />

              {/* 左上數字 */}
              <div className="abs bottom:18px left:18px z:2">

                <div
                  className="font-weight:700"
                  style={{
                    fontSize: "46px",
                    lineHeight: 1,
                    color: "#fff",
                    textShadow: "0 4px 18px rgba(0,0,0,.55)"
                  }}
                >
                  5+
                </div>

                <div
                  style={{
                    marginTop: 6,
                    color: "rgba(255,255,255,.85)",
                    fontSize: 15,
                    textShadow: "0 2px 8px rgba(0,0,0,.55)"
                  }}
                >
                  計畫參與
                </div>

              </div>

            </div>

            {/* 第二張 */}
            <div className="rel flex:1 overflow:hidden r:18px  translateY(-16px):hover ~all|0.4s">

              <img
                src="/images/data_banner02.jpg"
                className="w:full h:240px object-fit:cover"
              />

              <div
                className="abs inset:0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)"
                }}
              />

              <div className="abs bottom:18px left:18px z:2">

                <div
                  className="font-weight:700"
                  style={{
                    fontSize: "46px",
                    lineHeight: 1,
                    color: "#fff",
                    textShadow: "0 4px 18px rgba(0,0,0,.55)"
                  }}
                >
                  2年
                </div>

                <div
                  style={{
                    marginTop: 6,
                    color: "rgba(255,255,255,.85)",
                    fontSize: 15,
                    textShadow: "0 2px 8px rgba(0,0,0,.55)"
                  }}
                >
                  教育經驗
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* 右側 */}
        <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rbr:10px rb:10px@<md">
          <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
            聯絡我
          </div>


          <div className="mt:18px flex flex:col gap:12px">

            {/* Email */}
            <a
              href="mailto:tytytyt6372@gmail.com"
              className="flex ai:center gap:14px p:14px r:14px bg:#ffffff08 text-decoration:none color:white ~all|200ms b:1px|solid|rgba(255,255,255,.08) bl:6px|solid|#fff:hover"
            >

              <div
                className="w:42px h:42px flex ai:center jc:center r:100% bg:#ffffff15 f:20px">
                <i className="bi bi-envelope"></i>
              </div>

              <div className="flex flex:col">
                <span className="f:14px f:#999">
                  Email
                </span>
                <span className="f:16px">
                  tytytyt6372@gmail.com
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/ptd.tw_"
              target="_blank"
              className="flex ai:center gap:14px p:14px r:14px bg:#ffffff08 text-decoration:none color:white ~all|200ms b:1px|solid|rgba(255,255,255,.08) bl:6px|solid|#fff:hover"
            >
              <div
                className="w:42px h:42px flex ai:center jc:center r:100% bg:#ffffff15 f:20px">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="flex flex:col">
                <span className="f:14px f:#999">
                  Instagram
                </span>
                <span className="f:16px">
                  @ptd.tw_
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );

};

const HomeView = () => {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <ActiveAboutSection />
      <ProjectSection />
      <ExperienceDataline />
      <div className="my:25px"></div>
    </div>

  );
};

export default HomeView;