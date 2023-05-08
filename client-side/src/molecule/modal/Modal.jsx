import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { StyledOverlay, StyledModalWrapper } from './styles';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeModalOnEscape);

    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [onClose]);

  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper onClick={closeOnOverlay} data-id='modalWrapper'>
        {children}
      </StyledModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
