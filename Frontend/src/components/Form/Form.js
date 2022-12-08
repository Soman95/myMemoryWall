import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useContext, useEffect } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';
import { Link } from 'react-router-dom';

import './Form.css';

const Form = () => {
  const [birthValue, setBirthValue] = useState(dayjs('2001-10-18T21:11:54'));
  const [deathValue, setDeathValue] = useState(dayjs('2020-08-28T21:11:54'));
  const [userProfileID, setUserProfileID] = useState('');
  const { setWallDataCtx, wallDataCtx } = useContext(WallDataCtx);

  useEffect(() => {
    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(wallDataCtx),
    };

    if (wallDataCtx.firstName) {
      const createProfile = async () => {
        const post = await fetch(
          'http://localhost:8000/api/profiles',
          postOptions
        );

        const json = await post.json();

        return json;
      };

      const profile = createProfile();

      profile
        .then(data => {
          setUserProfileID(data['_id']);
          console.log(data, 'POST REQUEST');
        })
        .catch(err => console.log(err));
    }
  }, [wallDataCtx]);

  const handleBirthChange = newValue => {
    setBirthValue(newValue);
  };

  const handleDeathChange = newValue => {
    setDeathValue(newValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setWallDataCtx({
      firstName: data.get('firstName'),
      deceasedFirstName: data.get('deceasedFirstName'),
      deceasedLastName: data.get('deceasedLastName'),
      birthDate: birthValue['$d'],
      deathDate: deathValue['$d'],
      email: data.get('email'),
      memoryName: [''],
      deceasedRelation: [''],
      deceasedMsg: [''],
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Enter Details
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Your Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='deceasedFirstName'
                  label='Their First Name'
                  name='deceasedFirstName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='DeceasedLastName'
                  label='Their Last Name'
                  name='deceasedLastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={6}>
                <DesktopDatePicker
                  label='Birth Date'
                  inputFormat='DD/MM/YYYY'
                  value={birthValue}
                  name='birthDate'
                  onChange={handleBirthChange}
                  renderInput={params => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={6}>
                <DesktopDatePicker
                  label='Death Date'
                  inputFormat='DD/MM/YYYY'
                  value={deathValue}
                  name='deathDate'
                  onChange={handleDeathChange}
                  renderInput={params => <TextField {...params} />}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3,
                mb: 2,
                background: '#71BA88',
                '&:hover': { backgroundColor: '#2c974b' },
              }}
            >
              Add to Database
            </Button>
            <Link
              to={`/profile/${userProfileID}`}
              style={{ textDecoration: 'none' }}
              onClick={e => (wallDataCtx.firstName ? e : e.preventDefault())}
            >
              <Button
                fullWidth
                variant='contained'
                sx={{
                  mb: 2,
                  background: '#71BA88',
                  '&:hover': { backgroundColor: '#2c974b' },
                }}
                disabled={wallDataCtx.firstName ? false : true}
              >
                <p className='navBtn'>Create Wall</p>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default Form;
