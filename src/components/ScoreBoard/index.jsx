import React from 'react';

import PropTypes from 'prop-types';
import {
  ScoreContainer,
  ScoreItem,
  ButtonContainer,
  ResetButton,
  SelectRoundsButton,
  HomeButton,
} from './styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Scoreboard({ scores, onReset, player1, player2 }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGameConfig = () => navigate('/players');
  const handleHome = () => navigate('/');
  return (
    <ScoreContainer aria-live='polite'>
      <ScoreItem>
        {t('SCOREBOARD.VICTORIES_X', { player: player1, score: scores.X })}
      </ScoreItem>
      <ScoreItem>
        {t('SCOREBOARD.VICTORIES_O', { player: player2, score: scores.O })}
      </ScoreItem>
      <ScoreItem>
        {t('SCOREBOARD.DRAWS')} {scores.draws}
      </ScoreItem>
      <ButtonContainer>
        <ResetButton
          onClick={onReset}
          aria-label={t('SCOREBOARD.ARIA_LABEL.RESET_ARIA_LABEL')}
        >
          {t('SCOREBOARD.RESET_BUTTON')}
        </ResetButton>
        <SelectRoundsButton
          onClick={handleGameConfig}
          aria-label={t('SCOREBOARD.ARIA_LABEL.CONFIG_ARIA_LABEL')}
        >
          {t('SCOREBOARD.CHANGE_ROUNDS')}
        </SelectRoundsButton>
        <HomeButton
          onClick={handleHome}
          aria-label={t('SCOREBOARD.ARIA_LABEL.HOME_ARIA_LABEL')}
        >
          {t('SCOREBOARD.HOME')}
        </HomeButton>
      </ButtonContainer>
    </ScoreContainer>
  );
}

Scoreboard.propTypes = {
  scores: PropTypes.shape({
    X: PropTypes.number.isRequired,
    O: PropTypes.number.isRequired,
    draws: PropTypes.number.isRequired,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Scoreboard;
