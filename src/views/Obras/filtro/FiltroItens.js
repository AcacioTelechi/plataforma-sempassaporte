import React, { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function FiltroItens(props) {
  const [selected, setSelected] = useState([]);

  function handleSelect(e) {
    if (e.target.checked) {
      setSelected([...selected, e.target.name]);
    } else {
      setSelected(selected.filter((item) => item !== e.target.name));
    }
  }

  return (
    <div className="p-1">
      <h3>{props.titulo}</h3>

      <FormGroup onChange={handleSelect}>
        {props.obj.map((item) => (
          <FormControlLabel
            sx={{ p: 0}}
            name={item.id}
            control={
              <Checkbox
                sx={{  "& .MuiSvgIcon-root": { height: 20 } }}
                size="small"
              />
            }
            label={item.nome}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default FiltroItens;
