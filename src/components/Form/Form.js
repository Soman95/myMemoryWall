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
import { useState, useContext } from 'react';
import { WallDataCtx } from '../../Context/WallDataContext';

import { createTheme, ThemeProvider } from '@mui/material';
import './Form.css';

// const theme = createTheme({
//   overrides: {
//     MuiOutlinedInput: {
//       notchedOutline: {
//         borderColor: '#72bb88',
//       },
//     },
//   },
// });

const defaultColor = '#72bb88';
const hoverColor = '#72bb88';
const focusColor = '#72bb88';

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: `${hoverColor} !important`,
        },
        '&$focused $notchedOutline': {
          borderColor: focusColor,
        },
      },
      notchedOutline: {
        borderColor: `${hoverColor} !important`,
      },
    },
  },
});

const Form = () => {
  const [birthValue, setBirthValue] = useState(dayjs('2001-10-18T21:11:54'));
  const [deathValue, setDeathValue] = useState(dayjs('2020-08-28T21:11:54'));

  const { setWallDataCtx } = useContext(WallDataCtx);

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
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
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
                sx={{ mt: 3, mb: 2 }}
              >
                Create Wall
              </Button>
            </Box>
          </Box>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Form;
