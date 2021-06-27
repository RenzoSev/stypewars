import Planets from './pages/Planets';
import Home from './pages/Home';

import Header from './components/Header';

import { StarWarsContextProvider } from './store/contexts/StarWarsContext';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <StarWarsContextProvider>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <Planets /> */}
    </StarWarsContextProvider>
  );
}

export default App;
