"use client";
import React, { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import ReactMarkdown from 'react:markdown';
import MarkdownViewer from "@/components/Reader/MarkdownViewer"
import { Timeline, Event } from "react-timeline-scribble";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroSection from "@/components/home/HeroSection";
import BioSection from "@/components/home/BioSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectSection from "@/components/home/ProjectSection";
import ContactSection from "@/components/home/ContactSection";


gsap.registerPlugin(ScrollTrigger);





const postModules = import.meta.glob('../../public/Markdown/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { meta: {}, body: content };

  const metaLines = match[1].split('\n');
  const meta = {};

  metaLines.forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key || !rest.length) return;
    const value = rest.join(':').trim();
    meta[key.trim()] = value.replace(/^['"]|['"]$/g, '');
  });

  return {
    meta,
    body: content.replace(match[0], ''),
  };
};

const posts = Object.entries(postModules)
  .map(([filePath, content]) => {
    const fileName = filePath.split('/').pop()?.replace(/\.md$/, '') || 'post';
    const { meta, body } = parseFrontmatter(content);
    const title = meta.title || fileName.replace(/-/g, ' ');
    const preview = String(body)
      .replace(/^#\s*/gm, '')
      .split('\n')
      .filter(Boolean)
      .slice(0, 3)
      .join(' ')
      .slice(0, 140);

    return {
      slug: fileName,
      title,
      date: meta.date || '',
      tags: meta.tags ? meta.tags.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
      preview: preview ? `${preview}...` : '閱讀更多內容',
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

// const TimelineData = [
//   {
//     year: "2023",
//     title: "新北市科學展覽會",
//     desc: "生活應用科特優，進入國展。",
//   },
//   {
//     year: "2025",
//     title: "SITCON學生計算機年會",
//     desc: "參與學生科技社群交流。",
//   },
//   {
//     year: "2025",
//     title: "築夢之地工作室",
//     desc: "成立學生創作者團隊。",
//   },
//   {
//     year: "2026",
//     title: "技職VSR永續計畫",
//     desc: "從故事開始的理財課。",
//   },
//   {
//     year: "2026",
//     title: "會考霸",
//     desc: "建立教育平台。",
//   }
// ];

// const ExperienceData = [
//   {
//     year: "2023",
//     title: "新北市科學展覽會",
//     desc: "生活應用科特優，進入國展。",
//   },
//   {
//     year: "2025",
//     title: "SITCON學生計算機年會",
//     desc: "參與學生科技社群交流。",
//   },
//   {
//     year: "2025",
//     title: "築夢之地工作室",
//     desc: "成立學生創作者團隊。",
//   },
//   {
//     year: "2026",
//     title: "技職VSR永續計畫",
//     desc: "從故事開始的理財課。",
//   },
//   {
//     year: "2026",
//     title: "會考霸",
//     desc: "建立教育平台。",
//   }
// ];

// const ExperienceDataline = () => {
//   return (
//     <>
//       <div
//         className="flex flex:col@<md gap:5px gap:0px@<md"
//       >
//         {/* 左側 */}
//         <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rbl:10px rbl:0px@<md">
//           <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
//             個人動態
//           </div>

//           <div className="mt:18px flex gap:12px">

//             {/* Card */}
//             <div className="rel flex:1 overflow:hidden r:18px  translateY(-16px):hover ~all|0.4s">

//               <img
//                 src="/images/data_banner01.jpg"
//                 className="w:full h:240px object-fit:cover"
//               />

//               {/* 底部漸層 */}
//               <div
//                 className="abs inset:0"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)"
//                 }}
//               />

//               {/* 左上數字 */}
//               <div className="abs bottom:18px left:18px z:2">

//                 <div
//                   className="font-weight:700"
//                   style={{
//                     fontSize: "46px",
//                     lineHeight: 1,
//                     color: "#fff",
//                     textShadow: "0 4px 18px rgba(0,0,0,.55)"
//                   }}
//                 >
//                   5+
//                 </div>

//                 <div
//                   style={{
//                     marginTop: 6,
//                     color: "rgba(255,255,255,.85)",
//                     fontSize: 15,
//                     textShadow: "0 2px 8px rgba(0,0,0,.55)"
//                   }}
//                 >
//                   計畫參與
//                 </div>

//               </div>

//             </div>

//             {/* 第二張 */}
//             <div className="rel flex:1 overflow:hidden r:18px  translateY(-16px):hover ~all|0.4s">

//               <img
//                 src="/images/data_banner02.jpg"
//                 className="w:full h:240px object-fit:cover"
//               />

//               <div
//                 className="abs inset:0"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.65) 100%)"
//                 }}
//               />

//               <div className="abs bottom:18px left:18px z:2">

//                 <div
//                   className="font-weight:700"
//                   style={{
//                     fontSize: "46px",
//                     lineHeight: 1,
//                     color: "#fff",
//                     textShadow: "0 4px 18px rgba(0,0,0,.55)"
//                   }}
//                 >
//                   2年
//                 </div>

//                 <div
//                   style={{
//                     marginTop: 6,
//                     color: "rgba(255,255,255,.85)",
//                     fontSize: 15,
//                     textShadow: "0 2px 8px rgba(0,0,0,.55)"
//                   }}
//                 >
//                   教育經驗
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//         {/* 右側 */}
//         <div className="bg:#121212 font:#fff mt:5px py:22px px:22px rbr:10px rb:10px@<md">
//           <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
//             聯絡我
//           </div>


//           <div className="mt:18px flex flex:col gap:12px">

//             {/* Email */}
//             <a
//               href="mailto:tytytyt6372@gmail.com"
//               className="flex ai:center gap:14px p:14px r:14px bg:#ffffff08 text-decoration:none color:white ~all|200ms b:1px|solid|rgba(255,255,255,.08) bl:6px|solid|#fff:hover"
//             >

//               <div
//                 className="w:42px h:42px flex ai:center jc:center r:100% bg:#ffffff15 f:20px">
//                 <i className="bi bi-envelope"></i>
//               </div>

//               <div className="flex flex:col">
//                 <span className="f:14px f:#999">
//                   Email
//                 </span>
//                 <span className="f:16px">
//                   tytytyt6372@gmail.com
//                 </span>
//               </div>
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://instagram.com/ptd.tw_"
//               target="_blank"
//               className="flex ai:center gap:14px p:14px r:14px bg:#ffffff08 text-decoration:none color:white ~all|200ms b:1px|solid|rgba(255,255,255,.08) bl:6px|solid|#fff:hover"
//             >
//               <div
//                 className="w:42px h:42px flex ai:center jc:center r:100% bg:#ffffff15 f:20px">
//                 <i className="bi bi-instagram"></i>
//               </div>
//               <div className="flex flex:col">
//                 <span className="f:14px f:#999">
//                   Instagram
//                 </span>
//                 <span className="f:16px">
//                   @ptd.tw_
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );

// };

const HomeView = () => {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <ExperienceSection />
      <ProjectSection />

      {posts.length > 0 && (
        <section className="mt:25px px:20px bg:#121212 font:#fff mt:5px py:22px px:22px r:10px">
          <div className="font-weight:bold bl:3px|solid|#fff pl:8px f:18px">
            最新文章
          </div>
          <div className="flex flex:col gap:12px mt:18px">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/posts/${post.slug}`}
                className="p:16px r:10px bg:#1e1e1e b:1px|solid|#2f2f2f text-decoration:none"
              >
                <div className="font-weight:bold f:#fff">{post.title}</div>
                {post.date && <div className="f:#999 mt:6px">{post.date}</div>}
                {post.tags.length > 0 && (
                  <div className="f:#7dd3fc mt:8px">
                    {post.tags.map((tag) => `#${tag}`).join(' ')}
                  </div>
                )}
                {/* <div className="f:#999 mt:8px">{post.preview}</div> */}
              </Link>
            ))}
          </div>
        </section>
      )}

      <ContactSection />
      <div className="my:25px"></div>
    </div>

  );
};

export default HomeView;