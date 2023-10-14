import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
