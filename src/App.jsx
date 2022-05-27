import { GlobalStyle } from './style-app';
import Search from './components/Search';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import { StyLogo, LogoCont } from './style-app';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <BrowserRouter>
          <LogoCont>
            <GiKnifeFork />
            <StyLogo to={'/'}> delicious </StyLogo>
          </LogoCont>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
