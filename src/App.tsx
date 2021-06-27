import Planets from './pages/Planets';
import Header from './components/Header';
import { StarWarsContextProvider } from './store/contexts/StarWarsContext';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <StarWarsContextProvider>
      <GlobalStyle />
      <Header />
      {/* <Planets /> */}
    </StarWarsContextProvider>
  );
}

export default App;
