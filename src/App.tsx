import Planets from './pages/Planets';
import { StarWarsContextProvider } from './store/contexts/StarWarsContext';

function App() {
  return (
    <StarWarsContextProvider>
      <Planets />
    </StarWarsContextProvider>
  );
}

export default App;
