import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import bikeFast from '@iconify/icons-mdi/bike-fast';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { useRouter } from 'next/router';
import { Advantages, Process, Feature, Benefits, Work } from './components';

const ServiceDetail = ({ services }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const router = useRouter();
  const { id } = router.query;
  const currentService = services.find((service) => service.id === id);

  const process = [
    {
      title: 'Collect requirements',
      icon: 'humanMaleBoard',
      subtitle:
        "Before doing anything we spend a good amount of time understanding our client's needs and requirements.",
    },
    {
      title: 'Agile development',
      icon: 'accountConvert',
      subtitle:
        'We are an agile team, we continue to deliver and continue to update our projects. ',
    },
    {
      title: 'Maintain',
      icon: 'autoFix',
      subtitle:
        'We maintain your system and we continue to update and add features as you wish.',
    },
  ];

  const numbers = [
    {
      title: 99,
      suffix: '%',
      subtitle: 'We develop high speed systems with 99% runtime',
    },
    {
      title: 0,
      suffix: '%',
      subtitle: 'We deliver 0 downtime systems',
    },
    {
      title: 200,
      suffix: '+',
      subtitle: 'Increase you SEO results by getting 200+ page visits daily',
    },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Advantages services={currentService.services} />
        </Container>
        <Container>
          <Process process={currentService?.process || process} />
        </Container>
        <Container>
          <Feature numbers={currentService.numbers || numbers} />
        </Container>
        <Container>
          <Work />
        </Container>
        <Container>
          <Box
            marginTop={4}
            display={'flex'}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              href={'/'}
            >
              Back home
            </Button>
          </Box>
        </Container>
      </Main>
    </Box>
  );
};

export default ServiceDetail;
