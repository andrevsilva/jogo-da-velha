import styled from 'styled-components';

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  z-index: 1000;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 220px;
`;

export const ColorInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColorLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ColorInput = styled.input`
  width: 60px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: none;
`;
