import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { NavItem, ObjectNavItem } from './components';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { services: companyServices, about: aboutPage, help: helpPage } = pages;

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
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Services'} items={companyServices} />
        </Box>
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
