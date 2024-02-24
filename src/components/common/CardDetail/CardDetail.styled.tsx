import styled from 'styled-components';
import { SubtitleCard } from '../Card/Card.styled';

export const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  width: 469px;

  img {
    width: 100%;
    height: 248px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: -10px;
  }

  h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colorTitleText};
  }
`;

export const SubtitleCardDetail = styled(SubtitleCard)`
  width: 330px;

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SubTitleTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
`;

export const TextBox = styled.div`
  flex-grow: 0;

  padding: 7px 14px;

  height: 32px;

  background: ${({ theme }) => theme.colorElementBcg};
  border-radius: 35px;

  p {
    white-space: nowrap;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colorElementText};
  }

  span {
    color: ${({ theme }) => theme.colorBlueText};
    font-weight: 600;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  width: 90%;
`;
