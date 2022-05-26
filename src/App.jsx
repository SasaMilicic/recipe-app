import { StyApp, GlobalStyle } from './style-app';
import Search from './components/Search';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyApp>
        <BrowserRouter>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </StyApp>
    </>
  );
}

export default App;
