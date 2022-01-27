import React, { useState } from "react";

import PerfilDropdown from "./PerfilDropdown";

import { IconButton, Popper, Fade } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function PerfilButton(props) {
  const { user } = props;
  const [anchorEl, setAnchorEl] = useState(false);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar alt={user.nome} src={user.fotoPerfil} />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <PerfilDropdown />
      </Popper>
    </>
  );
}

export default PerfilButton;
