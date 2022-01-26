import React, { useState } from "react";

function AmeiButton() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <button
      className={isDisabled ? "btn cinza disabled" : "btn cinza "}
      onClick={() => setIsDisabled(!isDisabled)}
    >
      {isDisabled ? "Não amo mais" : "Amei"}
    </button>
  );
}

export default AmeiButton;
