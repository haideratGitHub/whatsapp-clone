import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";

function Chat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    //run this code whenever a component loads
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={"https://avatars.dicebear.com/api/human/" + seed + ".svg"}
        ></Avatar>
        <div className="chat__headerInfo">
          <h2>Room name</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Haider</span>
          Hey guys
          <span className="chat__timestamp">3:35 Pm</span>
        </p>
      </div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
