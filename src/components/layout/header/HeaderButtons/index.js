import React from "react";
import { useSelector } from "react-redux";

import PerfilButton from "./PerfilButton";

import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "../../../../styles/css/style.css";

function HeaderButtons() {
  const  user  = useSelector((state) => state.user);

  return (
    <>
      <IconButton>
        <Badge badgeContent={user.notificacoes} color="primary" >
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
      <PerfilButton user={user} />
    </>
  );
}

export default HeaderButtons;
