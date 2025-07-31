import React from 'react';

import PropTypes from 'prop-types';
import { Button } from './styles';

function Cell({ value, onClick, disabled }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      value={value}
      aria-label={`Cell ${value || 'empty'}`}
    >
      {value}
    </Button>
  );
}

Cell.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Cell.defaultProps = {
  value: null,
  disabled: false,
};

export default Cell;
