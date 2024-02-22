import { FaCar } from 'react-icons/fa';
import { LogoContainer } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <FaCar fontSize="24px" />
      <p>UA RENT CAR</p>
    </LogoContainer>
  );
};
