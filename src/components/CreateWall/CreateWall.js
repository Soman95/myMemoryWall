import Form from '../Form/Form';
import { AppBar, Box, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';

import logo from '../../assets/memoryLogo.png';
import './CreateWall.css';

const CreateWall = () => {
  const upStyles = useSpring({
    from: { y: -30 },
    to: { y: 0 },
    config: config.molasses,
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <animated.div style={{ ...upStyles }}>
          <AppBar position='static' sx={{ backgroundColor: '#169f95' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link to='/'>
                <div className='appLogo'>
                  <img src={logo} alt='' />
                </div>
              </Link>
              <Link to='/'>
                <HomeIcon
                  sx={{ fontSize: 50, marginRight: 10, color: 'white' }}
                />
              </Link>
            </Toolbar>
          </AppBar>
        </animated.div>
      </Box>
      <div className='formContainer'>
        <Form />
      </div>
    </>
  );
};

export default CreateWall;
