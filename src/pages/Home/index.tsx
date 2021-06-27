import { FiSearch } from 'react-icons/fi';
import { MainContainer, MainTitle } from './styles';

function Home() {
  return (
    <MainContainer>
      <MainTitle>
        Explore <br /> the Galaxy
      </MainTitle>
      
      <label htmlFor="find-planet">
        <FiSearch />
        <input placeholder="Find a Planet" id="find-planet" />
      </label>
    </MainContainer>
  );
}

export default Home;
