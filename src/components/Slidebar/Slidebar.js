import { Avatar } from "@material-ui/core";
import React from "react";
import "./Slidebar.css";

function Slidebar() {
  const recentItem = (topic) => (
    <div className="slidebar__recentItem">
      <span className="slidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="slidebar">
      <div className="slidebar__top">
        <img
          src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        ></img>
        <Avatar className="slidebar__avatar" />
        <h2>Vinay Maheshwari</h2>
        <h4>vinaymaheshwari35@gmail.com</h4>
      </div>
      <div className="slidebar__stats">
        <div className="slidebar__stat">
          <p>Who viewd you</p>
          <p className="slidebar__statNumber">2,543</p>
        </div>

        <div className="slidebar__stat">
          <p>Views on post</p>
          <p className="slidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="slidebar__bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}
        {recentItem("web dev")}
        {recentItem("twitter clone")}
        {recentItem("firebase")}
      </div>
    </div>
  );
}

export default Slidebar;
