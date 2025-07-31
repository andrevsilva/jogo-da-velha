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
  CurrentPlayerText,
  defaultColors,
  RoundInfo,
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
      setTimeout(resetGame, 1000);
    }
  }, [gameOver, gameFinished, resetGame]);

  return (
    <ThemeProvider theme={{ colors }}>
      <GameHeader>
        <GameTitle>{t('GAME.TITLE')}</GameTitle>
        <PlayerName>{t('GAME.PLAYER_1_LABEL', { player: player1 })}</PlayerName>
        <PlayerName>{t('GAME.PLAYER_2_LABEL', { player: player2 })}</PlayerName>
        <RoundInfo>
          {t('GAME.ROUND_INFO')} {rounds === 0 ? 11 : rounds}
        </RoundInfo>
      </GameHeader>
      <GlobalStyle />
      <Container>
        {gameFinished && (
          <WinnerText>
            {t('GAME.WINNER_MESSAGE')} {scores.X >= rounds ? player1 : player2}
          </WinnerText>
        )}
        <Board board={board} onCellClick={playMove} gameOver={gameOver} />
        <CurrentPlayerText>
          {t('GAME.CURRENT_PLAYER')} {currentPlayer}
        </CurrentPlayerText>
        <Timer timeLeft={timeLeft} />
        <Scoreboard
          player1={player1}
          player2={player2}
          scores={scores}
          onReset={resetScores}
        />
        <FloatingMenu colors={colors} onChangeColors={setColors} />
      </Container>
    </ThemeProvider>
  );
}
