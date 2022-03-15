import React, { useEffect, useRef, useState } from 'react';
import './modalItemTrailer.scss'

function ModalItemTrailer(props) {

  const iframeRef = useRef(null)

  const handleClose = () => {
    const modal = document.querySelector(`#${props.modal}`)
    console.log(modal, `.${props.modal}`)
    modal.classList.remove('active')
    iframeRef.current.setAttribute('src', '');
  }


  return (
    <div className='modal__item-trailer'>
      <iframe ref={iframeRef}
        src={props.src} 
        title="Trailer"></iframe>
      <div className="modal__item-trailer-close" onClick={handleClose}>
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
    </div>
  );
}

export default ModalItemTrailer;