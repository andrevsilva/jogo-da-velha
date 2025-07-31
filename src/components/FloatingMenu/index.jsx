import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  MenuButton,
  MenuContainer,
  ColorInputRow,
  ColorLabel,
  ColorInput,
} from './styles';

function FloatingMenu({ colors, onChangeColors }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    onChangeColors({ ...colors, [name]: value });
  };

  return (
    <>
      <MenuButton
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls='color-menu'
      >
        {open
          ? t('FLOATING_MENU.CLOSE_MENU')
          : t('FLOATING_MENU.CUSTOMIZE_COLORS')}
      </MenuButton>
      {open && (
        <MenuContainer
          id='color-menu'
          role='region'
          aria-label={t('FLOATING_MENU.ARIA_LABEL.COLOR_CUSTOMIZATION_MENU')}
        >
          <ColorInputRow>
            <ColorLabel htmlFor='xColor'>
              {t('FLOATING_MENU.COLOR_FOR_X')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='xColor'
              name='xColor'
              value={colors.xColor}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_X')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='oColor'>
              {t('FLOATING_MENU.COLOR_FOR_O')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='oColor'
              name='oColor'
              value={colors.oColor}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_O')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='background'>
              {t('FLOATING_MENU.COLOR_FOR_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='background'
              name='background'
              value={colors.background}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_BACKGROUND')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='boardBackground'>
              {t('FLOATING_MENU.COLOR_FOR_BOARD_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='boardBackground'
              name='boardBackground'
              value={colors.boardBackground}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_BOARD')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='cellBackground'>
              {t('FLOATING_MENU.COLOR_CELL_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='cellBackground'
              name='cellBackground'
              value={colors.cellBackground}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_CELL')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='cellBorder'>
              {t('FLOATING_MENU.COLOR_FOR_BORDER')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='cellBorder'
              name='cellBorder'
              value={colors.cellBorder}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_CELL_BORDER'
              )}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='cellHover'>
              {t('FLOATING_MENU.COLOR_FOR_CELL_HOVER')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='cellHover'
              name='cellHover'
              value={colors.cellHover}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_CELL_HOVER')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='scoreBackground'>
              {t('FLOATING_MENU.COLOR_FOR_SCORE_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='scoreBackground'
              name='scoreBackground'
              value={colors.scoreBackground}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_SCORE_BACKGROUND'
              )}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='buttonBackground'>
              {t('FLOATING_MENU.COLOR_FOR_BUTTON_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='buttonBackground'
              name='buttonBackground'
              value={colors.buttonBackground}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_BUTTON_BACKGROUND'
              )}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='buttonText'>
              {t('FLOATING_MENU.COLOR_FOR_BUTTON_TEXT')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='buttonText'
              name='buttonText'
              value={colors.buttonText}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_BUTTON_TEXT'
              )}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='buttonHover'>
              {t('FLOATING_MENU.COLOR_FOR_BUTTON_HOVER')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='buttonHover'
              name='buttonHover'
              value={colors.buttonHover}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_BUTTON_HOVER'
              )}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='timer'>
              {t('FLOATING_MENU.COLOR_FOR_TIMER')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='timer'
              name='timer'
              value={colors.timer}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_TIMER')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='text'>
              {t('FLOATING_MENU.COLOR_FOR_TEXT')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='text'
              name='text'
              value={colors.text}
              onChange={handleColorChange}
              aria-label={t('FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_TEXT')}
            />
          </ColorInputRow>

          <ColorInputRow>
            <ColorLabel htmlFor='menuBackground'>
              {t('FLOATING_MENU.COLOR_FOR_MENU_BACKGROUND')}
            </ColorLabel>
            <ColorInput
              type='color'
              id='menuBackground'
              name='menuBackground'
              value={colors.menuBackground}
              onChange={handleColorChange}
              aria-label={t(
                'FLOATING_MENU.ARIA_LABEL.SELECT_COLOR_MENU_BACKGROUND'
              )}
            />
          </ColorInputRow>
        </MenuContainer>
      )}
    </>
  );
}

FloatingMenu.propTypes = {
  colors: PropTypes.object.isRequired,
  onChangeColors: PropTypes.func.isRequired,
};

export default FloatingMenu;
