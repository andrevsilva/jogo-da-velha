import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import useGameState from '../../hooks/useGameState';
import useTimer from '../../hooks/useTimer';

import Board from '../../components/Board';
import Scoreboard from '../../components/ScoreBoard';
import FloatingMenu from '../../components/FloatingMenu';
import Timer from '../../components/Timer';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from '../../styles/globalStyles';
import {
  WinnerText,
  GameHeader,
  GameTitle,
  PlayerName,
  Container,
  Title,
  CurrentPlayerText,
  defaultColors,
} from './styles';

export default function Game() {
  const { t } = useTranslation();
  const location = useLocation();
  const { player1, player2, rounds } = location.state || {};
  const [colors, setColors] = useState(defaultColors);

  const {
    board,
    currentPlayer,
    scores,
    gameOver,
    gameFinished,
    playMove,
    autoFillMove,
    resetGame,
    resetScores,
  } = useGameState();

  const { timeLeft } = useTimer(5, autoFillMove);

  useEffect(() => {
    if (gameOver && !gameFinished) {
      setTimeout(resetGame, 1500);
    }
  }, [gameOver, gameFinished, resetGame]);

  return (
    <ThemeProvider theme={{ colors }}>
      <GameHeader>
        <GameTitle>{t('GAME.TITLE')}</GameTitle>
        <PlayerName>
          {t('GAME.PLAYER_1_LABEL')} <strong>{player1}</strong>
        </PlayerName>
        <PlayerName>
          {t('GAME.PLAYER_2_LABEL')} <strong>{player2}</strong>
        </PlayerName>
      </GameHeader>
      <GlobalStyle />
      <Container>
        <Title>{t('GAME.TITLE')}</Title>
        <Board board={board} onCellClick={playMove} gameOver={gameOver} />
        <CurrentPlayerText>
          {t('GAME.CURRENT_PLAYER')} {currentPlayer}
        </CurrentPlayerText>
        <Timer timeLeft={timeLeft} />
        <Scoreboard scores={scores} onReset={resetScores} />
        {gameFinished && (
          <WinnerText>
            {t('GAME.WINNER_MESSAGE')} {scores.X >= rounds ? player1 : player2}
          </WinnerText>
        )}
        <FloatingMenu colors={colors} onChangeColors={setColors} />
      </Container>
    </ThemeProvider>
  );
}
