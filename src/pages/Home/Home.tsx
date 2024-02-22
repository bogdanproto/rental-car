import { routePage } from 'const';
import { HomeContainer, LinkMainPage } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Looking for a vehicle? You’re at the right place.</h1>
      <h2>Starting from $10.00 per day</h2>
      <img
        src="https://res.cloudinary.com/dcwqo29q0/image/upload/v1708597026/qnnzyaobguredse4yol2.png"
        alt="car"
      />
      <LinkMainPage to={routePage.CATALOG}>Go to our catalog</LinkMainPage>
    </HomeContainer>
  );
};

export default Home;
