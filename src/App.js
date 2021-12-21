import logo from './logo.svg';
import './App.css';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/themes';

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      My Files
    </ThemeProvider>
  </>
}

export default App;
