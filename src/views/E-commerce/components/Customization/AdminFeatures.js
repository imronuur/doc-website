import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function AdminFeatures({ theme }) {
  return (
    <Grid item xs={12} sm={6} data-aos={'fade-up'}>
      <Box marginTop={3}>
        <Typography variant={'h5'} fontWeight={700} gutterBottom>
          Admin Features
        </Typography>
      </Box>
      {[
        'Can Create Categories, Sub-Categories, Products',
        'Can Read Categories, Sub-Categories, Products',
        'Can Update Categories, Sub-Categories, Products',
        'Can Delete Categories, Sub-Categories, Products',
        'We allow bulk product and bulk category creation,',
        'the admin can manage their clients, create invoices and see or update user orders',
        'we give the admin ability to customize the client-side landing page by creating special offers and brands,',
        'also the admin can create discount coupon codes, where users can apply on checkout to get discounts.',
        'The most important feature is the ability for the admin to create custom roles',
        'and give customized access to different roles as he wishes,',
        'the platform also supports user management, where the admin can create new users, ban users and delete them.',
      ].map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box component={ListItem} disableGutters width={'auto'} padding={0}>
            <Box
              component={ListItemAvatar}
              minWidth={'auto !important'}
              marginRight={2}
            >
              <Box
                component={Avatar}
                bgcolor={theme.palette.secondary.main}
                width={20}
                height={20}
              >
                <svg
                  width={12}
                  height={12}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Box>
            <ListItemText primary={item} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default AdminFeatures;
