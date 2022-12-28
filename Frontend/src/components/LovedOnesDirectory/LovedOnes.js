import { AppBar, Box, Toolbar, Search, SearchIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import logo from '../../assets/memoryLogo.png';
import Card from './Card';
import { useEffect, useState } from 'react';

import './LovedOnes.css';

const LovedOnes = () => {
  const [formData, setFormData] = useState('');
  const [allProfiles, setAllProfiles] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClick = () => {
    console.log(formData);
  };

  useEffect(() => {
    const getProfiles = async () => {
      const profiles = await fetch('http://localhost:8000/api/profiles');

      const json = await profiles.json();

      setAllProfiles(json);
    };

    getProfiles();
  }, []);

  // console.log(allProfiles);

  const upStyles = useSpring({
    from: { y: -30 },
    to: { y: 0 },
    config: config.molasses,
  });

  return (
    <div className='searchContainer'>
      <Box sx={{ flexGrow: 1 }}>
        <animated.div style={{ ...upStyles }}>
          <AppBar
            position='static'
            sx={{ backgroundColor: '#71BA88', height: '230px' }}
          >
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

            <div className='searchBar'>
              <form onSubmit={handleSubmit}>
                <input
                  className='noOutline'
                  type='text'
                  placeholder='Type name...'
                  onChange={e => setFormData(e.target.value)}
                />
              </form>
              <button onClick={handleClick}>Search</button>
            </div>
          </AppBar>
        </animated.div>
      </Box>

      <div className='searchCardContainer'>
        {allProfiles.map((profile, i) => (
          <div key={i}>
            <Card profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LovedOnes;
