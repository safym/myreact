// import framework components
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonSignin = () => {
  return (
    <ColorButton variant="contained" size="large" fullWidth>
      Sign in
    </ColorButton>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  
  backgroundColor: "#4f3366",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

export default ButtonSignin;
