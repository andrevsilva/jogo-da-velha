import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
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
