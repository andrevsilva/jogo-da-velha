import styled from 'styled-components';

export const Button = styled.button`
  width: 80px;
  height: 80px;
  font-size: 3rem;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ value, theme }) =>
    value === 'X'
      ? theme.colors.xColor
      : value === 'O'
      ? theme.colors.oColor
      : theme.colors.text};
  background-color: ${({ theme }) => theme.colors.cellBackground};
  border: 2px solid ${({ theme }) => theme.colors.cellBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.cellBackground : theme.colors.cellHover};
  }
`;
