import { CssVarsProvider } from '@mui/joy';
// import { BrowserRouter } from 'react-router-dom';
// import { theme } from '../src/lib/theme';

const withThemeProvider = (Story, context) => {
  return (
    // <BrowserRouter>
    <CssVarsProvider>
      <Story {...context} />
    </CssVarsProvider>
    // </BrowserRouter>
  );
};

export const decorators = [withThemeProvider];
