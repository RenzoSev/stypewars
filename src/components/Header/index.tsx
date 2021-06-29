import { Link } from 'react-router-dom';
import starwarsLogo from '../../assets/starwars-logo.svg';
import useToFilter from '../../hooks/useToFilter';
import { DivLinksContainer, HeaderContainer, ImageLogo } from './styles';

function Header() {
  const { resetAllFilters } = useToFilter();

  return (
    <HeaderContainer>
      <ImageLogo src={starwarsLogo} alt="StarWars logo" />
      <DivLinksContainer>
        <Link to="/" onClick={resetAllFilters}>
          Home
        </Link>
        <Link to="/all-filters" onClick={resetAllFilters}>
          All filters
        </Link>
        <Link to="/filter-by-comparison" onClick={resetAllFilters}>
          Filter by comparison
        </Link>
        <Link to="/filter-by-order" onClick={resetAllFilters}>
          Filter by order
        </Link>
      </DivLinksContainer>
    </HeaderContainer>
  );
}

export default Header;
