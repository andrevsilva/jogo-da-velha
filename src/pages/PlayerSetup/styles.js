import styled from 'styled-components';

export const SetupContainer = styled.div`
  max-width: 400px;
  margin: 80px auto;
  text-align: center;
`;

export const SetupTitle = styled.h1`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const SetupInput = styled.input`
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.cellBorder};
  border-radius: 4px;
`;

export const SetupButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
