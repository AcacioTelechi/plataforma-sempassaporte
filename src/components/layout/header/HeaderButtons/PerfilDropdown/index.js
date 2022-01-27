import React from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function PerfilDropDown() {
  const dispatch = useDispatch();

  function handleSair() {
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <Box sx={{ width: 240, bgcolor: "background.paper", borderRadius: "16px"}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/meu-perfil">
              <ListItemText primary=" Meu perfil" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleSair}>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
