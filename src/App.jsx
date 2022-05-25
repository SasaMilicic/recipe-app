import { StyApp, GlobalStyle } from './style-app';
import Pages from './pages/Pages';
import Category from './components/Category';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyApp>
        <Category />
        <Pages />
      </StyApp>
    </>
  );
}

export default App;
