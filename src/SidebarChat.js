import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./sidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    //run this code whenever a component loads
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter the name for chat");
    if (roomName) {
      //do some clever database stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={"https://avatars.dicebear.com/api/human/" + seed + ".svg"}
      ></Avatar>
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message here...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
