import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, About, Advantages, Steps, Contact } from './components';
const IndexView = ({ services, advantages, process }) => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <About />
        </Container>
        <Container>
          <Features services={services} />
        </Container>
        <Container>
          <Advantages />
        </Container>
        <Container>
          <Steps />
        </Container>

        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Container>
            <Contact />
          </Container>
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
