import { useState, useCallback, useEffect } from 'react';
import resultWinner from '../utils/resultWinner';
import { useLocation } from 'react-router-dom';

export default function useGameState() {
  const location = useLocation();
  const { player1, player2, rounds } = location.state || {};

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [typePlayer, setTypePlayer] = useState('X');
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [gameOver, setGameOver] = useState(false);

  const maxWins = Number(rounds || 11);

  const playMove = useCallback(
    (index) => {
      if (board[index] || gameOver) return;

      const newBoard = [...board];
      newBoard[index] = typePlayer;
      setBoard(newBoard);

      if (!resultWinner(newBoard) && !newBoard.every(Boolean)) {
        setTypePlayer(typePlayer === 'X' ? 'O' : 'X');
        setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
      }
    },
    [board, gameOver, currentPlayer, typePlayer, player1, player2]
  );

  const autoFillMove = useCallback(() => {
    if (gameOver) return;
    const firstEmptyIndex = board.findIndex((cell) => cell === null);
    if (firstEmptyIndex !== -1) {
      playMove(firstEmptyIndex);
    }
  }, [board, gameOver, playMove]);

  useEffect(() => {
    if (gameOver) return;

    const winner = resultWinner(board);

    if (winner) {
      setScores((prev) => ({
        ...prev,
        [winner]: prev[winner] + 1,
      }));
      setGameOver(true);
    } else if (board.every(Boolean)) {
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      setGameOver(true);
    }
  }, [board, gameOver]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
    resetGame();
  };

  const gameFinished = scores.X >= maxWins || scores.O >= maxWins;

  return {
    board,
    currentPlayer,
    scores,
    gameOver,
    gameFinished,
    playMove,
    autoFillMove,
    resetGame,
    resetScores,
  };
}
