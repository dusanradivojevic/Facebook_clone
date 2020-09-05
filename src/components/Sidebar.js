import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow source={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Friends" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
