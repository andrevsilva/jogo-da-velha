import React from 'react';
import PropTypes from 'prop-types';
import { TimerBox } from './styles';
import { useTranslation } from 'react-i18next';

function Timer({ timeLeft }) {
  const { t } = useTranslation();
  return (
    <TimerBox aria-live='polite'>
      {t('TIMER.TIMER_BOX')} {timeLeft}s
    </TimerBox>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default Timer;
