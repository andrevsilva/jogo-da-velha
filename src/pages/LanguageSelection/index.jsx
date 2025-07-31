import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  LanguageContainer,
  LanguageTitle,
  FlagWrapper,
  FlagImage,
} from './styles';

export default function LanguageSelection() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    navigate('/players');
  };

  return (
    <LanguageContainer>
      <LanguageTitle>{t('LANGUAGE_SELECTION.CHOOSE_LANGUAGE')}</LanguageTitle>
      <FlagWrapper>
        <FlagImage
          src='https://flagcdn.com/w320/br.png'
          alt='Português'
          onClick={() => changeLanguage('pt')}
        />
        <FlagImage
          src='https://flagcdn.com/w320/us.png'
          alt='English'
          onClick={() => changeLanguage('en')}
        />
      </FlagWrapper>
    </LanguageContainer>
  );
}
