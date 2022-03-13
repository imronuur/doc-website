/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import monitorCellphone from '@iconify/icons-mdi/monitor-cellphone';
import apiIcon from '@iconify/icons-mdi/api';
import cloudLockOutline from '@iconify/icons-mdi/cloud-lock-outline';
import desktopClassic from '@iconify/icons-mdi/desktop-classic';
import deskLamp from '@iconify/icons-mdi/desk-lamp';
import schoolOutline from '@iconify/icons-mdi/school-outline';

import { useRouter } from 'next/router';

const icons = {
  monitorCellphone,
  apiIcon,
  cloudLockOutline,
  desktopClassic,
  deskLamp,
  schoolOutline,
};

const findTheIcon = (name) => {
  return <Icon icon={icons[name]} width={100} height={100} />;
};

const Features = ({ services }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          WHAT WE DO?
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          We provide everything you need in technology
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {services.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                >
                  <Box color={theme.palette.primary.dark}>
                    {findTheIcon(item.icon)}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Button onClick={() => router.push(`/service/${item.id}`)}>
                    Interested? Read More...
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
