import React from "react";
import {Fab} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function EditarPerfilButton() {
  return (
    <Fab variant="extended" size="small" sx={{ boxShadow: 0 }}>
      <EditIcon sx={{ mr: 1 }} />
      Editar perfil
    </Fab>
  );
}

export default EditarPerfilButton;
