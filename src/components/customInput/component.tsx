import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  label: string;
  onChange: (e: any) => void;
  value: string;
}

const CustomInput: React.FC<Props> = ({ label, onChange, value }) => {
  return (
    <TextField
      label={label}
      onChange={onChange}
      color={"primary"}
      value={value}
    />
  );
};

export default CustomInput;
