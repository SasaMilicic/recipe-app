import { StyApp, GlobalStyle } from './style-app';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyApp>
        <BrowserRouter>
          <Category />
          <Pages />
        </BrowserRouter>
      </StyApp>
    </>
  );
}

export default App;
