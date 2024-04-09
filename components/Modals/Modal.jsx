"use client";
import React from 'react'

const Modal = ({header,footer,children,setIsopen}) => {
  const handleClose = () => {
    setIsopen(false)
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>{header}</h2>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            {footer}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal