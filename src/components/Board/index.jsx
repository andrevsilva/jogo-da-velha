import React from 'react';

import Cell from './Cell';
import PropTypes from 'prop-types';
import { BoardContainer } from './styles';
import { useTranslation } from 'react-i18next';

function Board({ board, onCellClick, gameOver }) {
  const { t } = useTranslation();

  return (
    <BoardContainer role='grid' aria-label={t('BOARD.ARIA_LABEL')}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          disabled={!!cell || gameOver}
        />
      ))}
    </BoardContainer>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
  onCellClick: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
};

export default Board;
