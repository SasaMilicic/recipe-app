import { StyApp, GlobalStyle } from './style-app';
import Pages from './pages/Pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <StyApp>
        <h1>Hello World!</h1>
        <Pages />
      </StyApp>
    </>
  );
}

export default App;
