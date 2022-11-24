import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Card } from '../';

import styles from './styles.module.css';

function Modal(props) {
  const modalRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const { title, children, onClose } = props;

  const onCloseModal = (e) => {
    if (modalRef.current === e.target) {
      setIsModalOpen(false);
      onClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', onCloseModal);
      return () => document.removeEventListener('mousedown', onCloseModal);
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const component = (
    <div ref={modalRef} className={styles.modal}>
      <div>
        <Card>
          <Card.Title title={title} />
          {children}
        </Card>
      </div>
    </div>
  );

  return ReactDOM.createPortal(component, document.getElementById('modal'));
}

export default Modal;
