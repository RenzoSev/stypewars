import { Route, Switch } from 'react-router-dom';

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
      
      <Switch>
        <Route path="/all-filters" component={Planets} />
        <Route path="/" component={Home} />
      </Switch>

    </StarWarsContextProvider>
  );
}

export default App;
