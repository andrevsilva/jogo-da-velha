import styled from 'styled-components';

export const LanguageContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export const LanguageTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FlagWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

export const FlagImage = styled.img`
  width: 100px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
