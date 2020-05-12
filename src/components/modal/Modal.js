import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import './modal.scss'

const Modal = ({
  className,
  children,
  closeModal,
  onBackdropClick,
}) => (
  <>
    <div className={`modal-container ${className}`}>
      <Button
        text='X'
        onClick={() => closeModal(null)}
        className={'modal-close-button'}
      />
      <div className='modal-content'>
        {children}
      </div>
    </div>
    <div
      className='modal-overlay'
      onClick={() => onBackdropClick()}
    />
  </>
)

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default Modal