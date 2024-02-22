import styled from 'styled-components';

export const CardContainer = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;

  width: 274px;
  height: 426px;

  img {
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 8px;

    margin-bottom: 14px;
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;

  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;

    span {
      color: ${({ theme }) => theme.colorBlueText};
    }
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colorSubText};
  }
`;

export const SubtitleCard = styled.div`
  width: 100%;
  height: 40px;

  margin-bottom: 28px;

  overflow: hidden;

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.colorSubText};
  }
`;
