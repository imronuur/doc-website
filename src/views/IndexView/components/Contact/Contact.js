import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import { Map, Form } from './components';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Intersted in working with us?
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
