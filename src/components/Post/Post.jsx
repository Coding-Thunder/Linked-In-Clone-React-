import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import React from "react";
import InputOption from "../Input Option/InputOption";
import "./Post.css";

function Post({ name, description, message }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption color="gray" title="Like" Icon={ThumbUpAltOutlinedIcon} />
        <InputOption color="gray" title="Comment" Icon={ChatOutlinedIcon} />
        <InputOption color="gray" title="Share" Icon={ShareOutlinedIcon} />
        <InputOption color="gray" title="Like" Icon={SendOutlinedIcon} />
      </div>
    </div>
  );
}

export default Post;
