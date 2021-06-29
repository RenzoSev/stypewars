import { Link } from 'react-router-dom';
import starwarsLogo from '../../assets/starwars-logo.svg';
import { DivLinksContainer, HeaderContainer, ImageLogo } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <ImageLogo src={starwarsLogo} alt="StarWars logo" />
      <DivLinksContainer>
        <Link to="/">Home</Link>
        <Link to="/all-filters">All filters</Link>
        <Link to="/filter-by-comparison">Filter by comparison</Link>
        <Link to="/filter-by-order">Filtro by order</Link>
      </DivLinksContainer>
    </HeaderContainer>
  );
}

export default Header;
