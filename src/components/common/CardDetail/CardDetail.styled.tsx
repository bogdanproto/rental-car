import styled from 'styled-components';
import { SubtitleCard } from '../Card/Card.styled';

export const CardDetailContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 14px;

  width: 469px;

  img {
    width: 100%;
    height: 248px;
    object-fit: cover;
    border-radius: 8px;

    margin-bottom: 14px;
  }
`;

export const SubtitleCardDetail = styled(SubtitleCard)`
  width: 277px;
`;
