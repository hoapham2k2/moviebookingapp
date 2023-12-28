import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: this below component is used to provide all necessary components for the material ui
  </summary>
*/
type Props = {
  children: React.ReactNode;
};

const MuiProvider = (props: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {props.children}
    </LocalizationProvider>
  );
};

export default MuiProvider;
