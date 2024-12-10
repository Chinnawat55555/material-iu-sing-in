import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, CssBaseline, TextField, Stack, Box, FormControlLabel, Checkbox, Typography, Link, Divider } from '@mui/material';
import IconGoogle from './assets/IconGoogle';
import IconFacebook from './assets/IconFacebook';
import AppTheme from './AppTheme';

function App() {
  return (
    <AppTheme>
    <Box
      sx={{ padding: '2rem' }}
      maxWidth='400px'
      margin='auto'
      marginTop='10vh'
      border='1px solid'
      borderRadius='4px'
    >
      <Stack
        spacing={2}
        
      >
        <Typography
          variant='h1'
          sx={{ fontSize: '2rem', fontWeight: '500' }}
        >
          Sign in
        </Typography>
        <CssBaseline />
        <TextField
          id='email'
          name='email'
          required
          type='email'
          label='email'
          placeholder='user@email.com'
          fullWidth
        />
        <TextField
          required
          type='password'
          label='password'
          placeholder='********'
          fullWidth
          autoComplete='current-password'
          variant='outlined'
        />
        <FormControlLabel
          control={<Checkbox value='remember' />}
          label='Remember me'
          sx={{
            marginLeft: '-12px',
            "& .MuiFormControlLabel-label": { userSelect: 'none' },
          }}
        />
        <Button
          type='submit'
          variant='contained'
        >
          Sign in
        </Button>
        <Typography
          component='div'
          variant='body2'
          sx={{ textAlign: 'center', }}
        >
          Don't have account?{" "}
          <span>
            <Link href='#' variant='body2'>
              Sign up
            </Link>
          </span>
        </Typography>
        <Divider sx={{ fontSize: "0.75rem" }} >or</Divider>
        <Button
          type='submit'
          variant='outlined'
          startIcon={<IconGoogle />}
        >
          Sign in with Google
        </Button>
        <Button
          type='submit'
          variant='outlined'
          startIcon={<IconFacebook />}
        >
          Sign in with Facebook
        </Button>
      </Stack>
    </Box>
  </AppTheme>); 
}

export default App;
