import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge></DonutLarge>
          </IconButton>
          <IconButton>
            <Chat></Chat>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined></SearchOutlined>
          <input placeholder="Search chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar__chat"></div>
    </div>
  );
}

export default Sidebar;
