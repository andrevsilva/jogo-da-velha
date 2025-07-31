import styled from 'styled-components';

export const TimerBox = styled.div`
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.timer};
  user-select: none;
`;
