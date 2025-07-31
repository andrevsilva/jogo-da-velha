import React from 'react';

import PropTypes from 'prop-types';
import { ScoreContainer, ScoreItem, ResetButton } from './styles';
import { useTranslation } from 'react-i18next';

function Scoreboard({ scores, onReset }) {
  const { t } = useTranslation();
  return (
    <ScoreContainer aria-live='polite'>
      <ScoreItem>
        {t('SCOREBOARD.VICTORIES_X')} {scores.X}
      </ScoreItem>
      <ScoreItem>
        {t('SCOREBOARD.VICTORIES_O')} {scores.O}
      </ScoreItem>
      <ScoreItem>
        {t('SCOREBOARD.DRAWS')} {scores.draws}
      </ScoreItem>
      <ResetButton
        onClick={onReset}
        aria-label={t('SCOREBOARD.RESET_ARIA_LABEL')}
      >
        {t('SCOREBOARD.RESET_BUTTON')}
      </ResetButton>
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
