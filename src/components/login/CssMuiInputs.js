// import framework components
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});

styled(TextField)({});

export default CssTextField;
