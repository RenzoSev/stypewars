import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Planets from './pages/Planets';
import PlanetsByComparison from './pages/PlanetsByComparison';
import PlanetsByOrder from './pages/PlanetsByOrder';

import AnimatedRoutes from './components/FramerMotion/AnimatedRoutes';
import Header from './components/Header';

import { StarWarsContextProvider } from './store/contexts/StarWarsContext';

import GlobalStyle from './styles/globals';
import { RouteTransition } from './components/FramerMotion/RouteTransition';

function App() {
  return (
    <StarWarsContextProvider>
      <GlobalStyle />

      <Header />

      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition path="/all-filters">
          <Planets />
        </RouteTransition>

        <RouteTransition path="/filter-by-comparison">
          <PlanetsByComparison />
        </RouteTransition>

        <RouteTransition path="/filter-by-order">
          <PlanetsByOrder />
        </RouteTransition>

        <RouteTransition path="/">
          <Home />
        </RouteTransition>
      </AnimatedRoutes>
    </StarWarsContextProvider>
  );
}

export default App;
