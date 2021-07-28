import { createMuiTheme } from '@material-ui/core/styles';
import COLORS from './colors';

export const typography = {
  fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontSize: 13,
  color: COLORS.skyBlue,
};

const theme = createMuiTheme({
  typography,
  palette: {
    background: {
      default: COLORS.white,
    },
    primary: {
      main: COLORS.skyBlue,
      light: COLORS.skyBlue,
    },
    secondary: {
      main: COLORS.violet,
      light: COLORS.violet15,
      dark: COLORS.brightViolet,
    },
  },
});

export default theme;
