import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const CurrentPlayerText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const WinnerText = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const defaultColors = {
  xColor: '#f44336',
  oColor: '#2196f3',
  background: '#f0f0f0',
  boardBackground: '#fff',
  cellBackground: '#ffffff',
  cellBorder: '#cccccc',
  cellHover: '#eaeaea',
  scoreBackground: '#e0e0e0',
  buttonBackground: '#333',
  buttonText: '#fff',
  buttonHover: '#555',
  timer: '#ff5722',
  text: '#000000',
  menuBackground: '#ffffff',
};

export const GameHeader = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const GameTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const PlayerName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 4px 0;

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.xColor};
  }
`;

export const RoundInfo = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 4px 0;

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.xColor};
  }
`;
