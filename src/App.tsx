import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/Header';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
