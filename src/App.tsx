import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Planets from './pages/Planets';
import PlanetsByComparison from './pages/PlanetsByComparison';
import PlanetsByOrder from './pages/PlanetsByOrder';

import Header from './components/Header';

import { StarWarsContextProvider } from './store/contexts/StarWarsContext';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <StarWarsContextProvider>
      <GlobalStyle />

      <Header />

      <Switch>
        <Route path="/all-filters" component={Planets} />
        <Route path="/filter-by-comparison" component={PlanetsByComparison} />
        <Route path="/filter-by-order" component={PlanetsByOrder} />
        <Route path="/" component={Home} />
      </Switch>
    </StarWarsContextProvider>
  );
}

export default App;
