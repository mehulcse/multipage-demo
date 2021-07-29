import React from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import useDemo from './demo-hook';

const DemoBroadcast = () => {
  const {
    data,
  } = useDemo();

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="0 10%"
    >
      <Box width="100%" my={2}>
        <Typography>
          {`First Name: ${data?.firstName ?? ''}`}
        </Typography>
      </Box>
      <Box width="100%" my={2}>
        <Typography>
          {`Last Name: ${data?.lastName ?? ''}`}
        </Typography>
      </Box>
      <Box width="100%" my={2}>
        <Typography>
          {`Age Group: ${data?.ageGroup ?? ''}`}
        </Typography>
      </Box>
      <Box width="100%" my={10}>
        <TabContext value={(data?.tab - 1).toString()}>
          <AppBar position="static">
            <Tabs value={data?.tab - 1} onChange={() => {}} disabled aria-label="simple tabs example">
              <Tab label="Menu One" />
              <Tab label="Menu Two" />
              <Tab label="Menu Three" />
            </Tabs>
          </AppBar>
          <TabPanel value={String(0)}>
            Item One
          </TabPanel>
          <TabPanel value={String(1)}>
            Item Two
          </TabPanel>
          <TabPanel value={String(2)}>
            Item Three
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default DemoBroadcast;
