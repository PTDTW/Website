import React from "react";
// import SectionTitle from "./SectionTitle";

const NotFound = () => {
  return (
    <>
     <div className="h:100vh flex flex:col jc:center ai:center">
        <div className="font-weight:bold f:35px bb:3px|solid|white pb:10px f:#fff">不存在的頁面</div>
        <div className="f:15px mt:10px f:#666">您正在訪問一個不存在的頁面</div>
    </div>
    </>
  );

};

export default NotFound;
