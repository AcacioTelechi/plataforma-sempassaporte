import React from "react";

import {  Fab } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CadastrarObraButton() {
  return (
    <Fab variant="extended" size="small" sx={{ boxShadow: 0 }}>
      <AddCircleIcon sx={{ mr: 1 }} />
      Cadastrar nova obra
    </Fab>
  );
}

export default CadastrarObraButton;
