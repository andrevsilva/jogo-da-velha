import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(3, 80px);
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.boardBackground};
  padding: 20px;
  border-radius: 10px;
`;
