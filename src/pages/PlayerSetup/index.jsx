import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SetupContainer, SetupTitle, SetupInput, SetupButton } from './styles';

export default function PlayerSetup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [rounds, setRounds] = useState('');

  const handleContinue = () => {
    if (!player1.trim() || !player2.trim()) {
      alert(t('PLAYER_SETUP.ALERT_PLAYER_NAMES'));

      return;
    }

    navigate('/game', {
      state: {
        player1,
        player2,
        rounds: Number(rounds),
      },
    });
  };

  return (
    <SetupContainer>
      <SetupTitle>{t('PLAYER_SETUP.PLAYER_NAMES')}</SetupTitle>

      <SetupInput
        type='text'
        placeholder={t('PLAYER_SETUP.PLAYER1')}
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <SetupInput
        type='text'
        placeholder={t('PLAYER_SETUP.PLAYER2')}
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <SetupInput
        type='number'
        placeholder={t('PLAYER_SETUP.MANY_ROUNDS')}
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
      />
      <SetupButton onClick={handleContinue}>
        {t('PLAYER_SETUP.CONTINUE')}
      </SetupButton>
    </SetupContainer>
  );
}
