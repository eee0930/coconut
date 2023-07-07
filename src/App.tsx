import { Outlet } from "react-router-dom";
import { lightTheme, darkTheme } from './utils/theme';
import { ThemeProvider } from 'styled-components';
// utils
import { GlobalStyle, BasicStyle, CocoStyles } from './utils/globalStyles';
import { useRecoilValue } from "recoil";
import { isDarkThemeState } from "./atoms";

function App() {
  const isDarkTheme = useRecoilValue(isDarkThemeState);
  return (
    <ThemeProvider theme={isDarkTheme? darkTheme: lightTheme}>
      <GlobalStyle />
      <BasicStyle />
      <CocoStyles />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
