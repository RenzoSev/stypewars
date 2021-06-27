import Planets from './pages/Planets';
import { StarWarsContextProvider } from './store/contexts/StarWarsContext';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <StarWarsContextProvider>
      <GlobalStyle />
      {/* <Planets /> */}
    </StarWarsContextProvider>
  );
}

export default App;
