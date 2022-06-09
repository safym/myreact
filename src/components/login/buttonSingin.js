// import framework components
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ButtonSingin = () => {
  return (
    <ColorButton variant="contained" size="large" fullWidth>
      Sing in
    </ColorButton>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#4f3366",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

export default ButtonSingin;
