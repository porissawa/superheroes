import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = ({
  text,
  onClick,
  className
}) => (
  <button
    className={`token-button ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
