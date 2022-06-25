import React from "react";
import { Button } from "@material-ui/core";
const UiButton = ({buttonText,onClick,color}) => {
  return(
      <Button
        onClick={onClick}
        color={color}
        variant="contained"
      >{buttonText}</Button>
  )
}

export default UiButton;