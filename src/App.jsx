import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelection from './pages/LanguageSelection';
import PlayerSetup from './pages/PlayerSetup';
import Game from './pages/Game';
import { ThemeProvider } from 'styled-components';
import { defaultColors } from './styles/globalStyles';

export default function App() {
  return (
    <ThemeProvider theme={{ colors: defaultColors }}>
      <Router>
        <Routes>
          <Route path='/' element={<LanguageSelection />} />
          <Route path='/players' element={<PlayerSetup />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
