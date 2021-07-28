import React from 'react';
import { AppBar, Box, Button, MenuItem, Tab, Tabs, TextField } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import { Link as RouterLink } from 'react-router-dom';
import useDashboard from './dashboard-hook';
import RenderInWindow from '../../components/WindowComponent';
import Demo from '../Demo';

const Dashboard = () => {
  const {
    data,
    handleChange,
    handleChangeValue,
    openWindow,
    setOpenWindow,
  } = useDashboard();

  const handleTabChange = (_: any, value: number) => {
    handleChangeValue('tab', value + 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Box width="100%" height="10vh" display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" target="_blank" component={RouterLink} to="/demo">Demo Tab</Button>
        <Button variant="contained" color="primary" onClick={() => setOpenWindow(true)}>Demo Window</Button>
      </Box>
      <Box
        width="100%"
        height="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0 30%"
      >
        <Box width="100%" my={2}>
          <TextField
            label="First Name"
            value={data?.firstName || ''}
            onChange={handleChange('firstName')}
            fullWidth
          />
        </Box>
        <Box width="100%" my={2}>
          <TextField
            label="Last Name"
            value={data?.lastName || ''}
            onChange={handleChange('lastName')}
            fullWidth
          />
        </Box>
        <Box width="100%" mt={2} mb={10}>
          <TextField
            select
            fullWidth
            label="Age Group"
            value={data?.ageGroup || ''}
            onChange={handleChange('ageGroup')}
            helperText="Please select income g"
          >
            <MenuItem key="0-20" value="0-20">
              0-20
            </MenuItem>
            <MenuItem key="20-40" value="20-40">
              20-40
            </MenuItem>
            <MenuItem key="40+" value="40+">
              40+
            </MenuItem>
          </TextField>
        </Box>
        <TabContext value={(data?.tab - 1).toString()}>
          <AppBar position="static">
            <Tabs value={data?.tab - 1} onChange={handleTabChange} aria-label="simple tabs example">
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
      {openWindow ? (
        <RenderInWindow>
          <Demo />
        </RenderInWindow>
      ) : null}
    </Box>
  );
};

export default Dashboard;
