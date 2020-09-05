import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ source, Icon, title }) {
  // capital Icon is for components
  return (
    <div className="sidebarRow">
      {source && <Avatar src={source} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
