import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { NavItem, ObjectNavItem } from './components';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { about: aboutPage, help: helpPage } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://res.cloudinary.com/imran6099/image/upload/v1647157847/Final_hawfop.png'
                : 'https://res.cloudinary.com/imran6099/image/upload/v1647157847/Final_hawfop.png'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <ObjectNavItem title={'About'} item={aboutPage} />
        </Box>
        <Box>
          <ObjectNavItem title={'Help'} item={helpPage} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
