// import framework components
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ButtonSignin = () => {
  return (
    <ColorButton variant="contained" size="large" fullWidth>
      Sign in
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

export default ButtonSignin;
