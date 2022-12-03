import './CreateWall.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/memoryLogo.png';
const CreateWall = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#72bb88' }}>
        <Toolbar>
          <div className='appLogo'>
            <img src={logo} alt='' />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CreateWall;
