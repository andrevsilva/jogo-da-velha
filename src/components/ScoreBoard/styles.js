import styled from 'styled-components';

export const ScoreContainer = styled.div`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.scoreBackground};
  padding: 15px 25px;
  border-radius: 10px;
  text-align: center;
  user-select: none;
`;

export const ScoreItem = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ResetButton = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const SelectRoundsButton = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const HomeButton = styled.button`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
