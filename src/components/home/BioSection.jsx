import React from "react";
import SectionTitle from "./SectionTitle";

const BioSection = () => {
  return (
    <section className="home-card">
      <SectionTitle title="關於我" />
      <div className="home-card-body">
        <p>
          嗨！很高興見到你～我目前是一名臺灣學生，目前就讀商管群。平時喜歡胡搞瞎搞，我經營過團隊、探索學生自治、學習網站開發、也熱愛於參與教育甚至是參與社會責任。比起一個人商業分析、技術開發，我更喜歡與其他夥伴一同討論更多點子與想法，攜手參與教育企劃，一同為下一代創造更好的可能。
        </p>
        <div className="home-tag-list">
          <span>#前後端開發</span>
          <span>#教育參與</span>
          <span>#學生自治</span>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
