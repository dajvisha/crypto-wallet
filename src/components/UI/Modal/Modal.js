import { Card } from '../';

import styles from './styles.module.css';

function Modal(props) {
  const { title, children } = props;

  return (
    <div className={styles.modal}>
      <div>
        <Card>
          <Card.Title title={title} />
          {children}
        </Card>
      </div>
    </div>
  );
}

export default Modal;
