// import components
import img_user from '../../img/icons/user.svg'

// import framework components
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const Profile = () => {
  return (
    <div className="Profile">
      <div className="AboutProfile">
       
            <img src={img_user} alt="This is logo" /> 
            <div className='UserInfo'>
                <h1>Username</h1>
                <p>My name is Username! Hello!🍇</p>
            </div>

      </div>

      <div className="NewPost">
        

        <CssTextField 
            label="New post" 
            multiline 
            id="InputPost" 
            minRows={5}
            maxRows={12}
            fullWidth 
            margin="dense" 
        />

        <div className='ButtonPublish'>
            <ColorButton variant="contained" size="large">
                Publish
            </ColorButton>
        </div>

      </div>


    </div>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  
    backgroundColor: "#4f3366",
    "&:hover": {
      backgroundColor: "#000000",
    },
  }));

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
  

export default Profile;
