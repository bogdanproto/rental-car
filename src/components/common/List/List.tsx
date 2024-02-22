import { ReactNode } from 'react';
import { ListStyled } from './List.styled';

interface ListProps {
  children: ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return <ListStyled>{children}</ListStyled>;
};
