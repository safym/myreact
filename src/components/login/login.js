// import components
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

styled(TextField)({})

const HomePage = () => {
  return (
    <div className="login">
        <div className="username">
            <CssTextField label="Login" id="Login" margin="dense"/>
        </div>

        <div className="password">
            <CssTextField label="Password" id="Password" margin="dense"/>
        </div>

    </div>
  );
};

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#ae7cd8',
    },
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ae7cd8',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: '#ae7cd8',
      },
    },
  });

export default HomePage;
