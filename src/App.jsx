import { StyApp, GlobalStyle } from './style-app';
import Pages from './pages/Pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyApp>
        <Pages />
      </StyApp>
    </>
  );
}

export default App;
