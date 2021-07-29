import React from 'react';
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  RadioGroup,
  Tab,
  Tabs,
  TextField,
  FormControl,
  FormLabel, Radio,
} from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import { Link as RouterLink } from 'react-router-dom';
import useDashboard from './dashboard-hook';
import { METHOD } from '../../variables/constants';

const Dashboard = () => {
  const {
    data,
    handleChange,
    handleChangeValue,
    method,
    setMethod,
    openNewWindow,
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Method</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={method} onChange={(event: any) => setMethod(event.target.value)}>
            <FormControlLabel value={METHOD.LOCAL_STORAGE} control={<Radio />} label="Local Storage" />
            <FormControlLabel value={METHOD.POPUP} control={<Radio />} label="Channel Message API" />
            <FormControlLabel value={METHOD.BROADCAST} control={<Radio />} label="Broadcast API" />
          </RadioGroup>
        </FormControl>
        {method === METHOD.LOCAL_STORAGE && <Button variant="contained" color="primary" target="_blank" component={RouterLink} to="/demo">Demo Tab</Button>}
        {(method === METHOD.POPUP || method === METHOD.BROADCAST) && <Button variant="contained" color="primary" onClick={openNewWindow}>Demo Window</Button>}
      </Box>
      <Box
        width="100%"
        height="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0 10%"
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
    </Box>
  );
};

export default Dashboard;
