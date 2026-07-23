import React, { useState } from "react";

const banners = [
  {
    image: "/images/banner.webp",
    text: "傳遞的不只是知識，而是下一個可能 ｜「從故事開始的理財課」新北技職vsr計畫 • 2026/04/15。",
    fit: "cover",
    position: "50% 50%",
  },
  {
    image: "/images/banner02.png",
    text: "緣分總是令人欣慰又感嘆 ｜「曾經」與好友一同遊玩的Minecraft伺服器剪影 • 2024/06/19",
    fit: "cover",
    position: "50% 50%",
  },
  {
    image: "/images/banner03.jpg",
    text: "前進，永遠都不是一夕之間｜ptd.study讀書帳，圖片 • 2025/10/06 ",
    fit: "cover",
    position: "50% 70%",
  },
  {
    image: "/images/banner04.jpg",
    text: "旻，讓人想起無邊的天際 ｜日本—羊蹄山 • 2024/01/24 ",
    fit: "cover",
    position: "50% 45%",
  },
  {
    image: "/images/banner05.jpg",
    text: "日落後，要好好休息喔 ｜泰國餐廳 • 2025/08/11 ",
    fit: "cover",
    position: "50% 50%",
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
            height: expand ? "600px" : "260px",
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
              f:10px@<md
              f:8px@<sm
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
        <div className="abs left:30px right:30px left:0px@<md right:0px@<md mx:auto@<md bottom:-85px bottom:-295px@<md flex flex:col@<md jc:space-between jc:center@<md ai:center gap:20px@<md z:10">

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
          <div className="flex gap:15px pt:45px pt:0px@<md">
            <a
              href="https://github.com/ptdtw"
              className="flex ai:center jc:center p:10px p:8px@<lg px:15px px:10px@<lg f:15px@<md r:999px bg:#ffffff15 backdrop-filter:blur(10px) b:1px|solid|#ffffff22 f:#fff text-decoration:none"
            >
              <i class="bi bi-github"></i>
              &nbsp;&nbsp;Github
            </a>

            <a
              href="https://instagram.com/ptd.tw_"
              className="flex ai:center jc:center p:10px p:8px@<lg px:15px px:10px@<lg f:15px@<md r:999px bg:#ffffff15 backdrop-filter:blur(10px) b:1px|solid|#ffffff22 f:#fff text-decoration:none"
            >
              <i class="bi bi-instagram"></i>
              &nbsp;&nbsp;Instagram
            </a>
          </div>
        </div>
      </div>

      {/* 往下推 */}
      <div className="h:80px h:280px@<md bg:#121212 mt:4px pb:20px rb:0px" />
    </>)
};

export default HeroSection;
