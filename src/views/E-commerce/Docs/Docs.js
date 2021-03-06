import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            E-commerce Web App
          </Typography>
          <Typography variant={'h6'}>
            We developed an e-commerce platform, with a lot of features and
            functionality
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            href="https://silicon-ecom-admin.web.app/"
            variant="contained"
            color="primary"
            size="large"
          >
            Live Preview
          </Button>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              What we used
            </Typography>
            <Typography component={'p'}>
              The admin-side was built using React js which is the most commonly
              used Web Framework according to the Stack Overflow developer
              survey,
            </Typography>
            <Typography mt={2} component={'p'}>
              The client-side was built with Next js which is a high-speed React
              framework that supports server-side rendering to increase SEO
              results and improve the website traffic.
            </Typography>
            <Typography mt={2} component={'p'}>
              The back-end API was built with Node js, it can handle a huge
              amount of requests per millisecond, private APIs are protected
              using Google Firebase Authentication, and since the back-end logic
              and data are completely separated from the front-end we can easily
              add mobile applications without any extra configurations.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              What we developed
            </Typography>
            <Typography component={'p'} mb={2}>
              We developed an e-commerce platform, with a lot of features and
              functionality, the platform consists of three different parts:
            </Typography>

            <Box display="flex" marginTop={{ xs: 2, md: 0 }} gap={2}>
              <Button
                href="https://silicon-ecom-admin.web.app/"
                variant="contained"
                color="primary"
                size="large"
              >
                Client Demo
              </Button>

              <Button
                href="https://silicon-ecom-admin.web.app/"
                variant="contained"
                color="primary"
                size="large"
              >
                Admin Demo
              </Button>

              <Button
                href="https://silicon-ecom-admin.web.app/"
                variant="contained"
                color="primary"
                size="large"
              >
                Backend Demo
              </Button>
            </Box>
            <Box marginTop={3}>
              <Divider />
            </Box>
            <Box marginTop={3}>
              <Typography variant={'h5'} fontWeight={700} gutterBottom>
                Our Application Features
              </Typography>
            </Box>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Admin Permissions',
                'Can Create Categories, Sub-Categories, Products',
                'Can Read Categories, Sub-Categories, Products',
                'Can Update Categories, Sub-Categories, Products',
                'Can Delete Categories, Sub-Categories, Products',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
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
          </Box>
          <Box>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              All Features
            </Typography>
            <Typography component={'p'}>
              We allow bulk product and category creation, the admin can manage
              their clients, create invoices and see or update user orders, we
              give the admin ability to customize the client-side landing page
              by creating special offers and brands, also the admin can create
              discount coupon codes, where users can apply on checkout to get
              discounts.
            </Typography>
            <Typography mt={2} component={'p'}>
              The most important feature is the ability for the admin to create
              custom roles and give customized access to different roles as he
              wishes, the platform also supports user management, where the
              admin can create new users, ban users and delete them.
            </Typography>
            <Typography mt={2} component={'p'}>
              The client can search for products or can go to the shop directory
              and start filtering through products using different filtering
              options, the client can sign up using email or his/her Google
              account, clients can add items to the cart, apply coupon codes for
              discounts, choose the delivery address, and pay using various
              payment methods. Clients can track their orders and manage their
              profile information.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card} bgcolor={'primary.main'}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="text.primary"
                    sx={{ color: 'common.white' }}
                  >
                    You like what you???re reading?
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ color: 'common.white' }}
                  >
                    Get free online programing tips and resources delivered
                    directly to your inbox.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Interactive decision support system
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    View all
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
