import { Card, Chip } from '../UI';

import { getCurrencyStyles } from '../../helpers/getCurrencyStyles';

import styles from './styles.module.css';

function Transaction(props) {
  const { amount, currency, status, sender, receiver, description } = props.details;
  const inlineStyles = getCurrencyStyles(currency);

  return (
    <Card className={styles.card}>
      <Card.Header style={inlineStyles} className={styles['card-header']}>
        <div>
          <Chip text={status} />
        </div>
        <div>
          <p>{amount}</p>
          <p>{currency}</p>
        </div>
      </Card.Header>
      <Card.Body className={styles['card-body']}>
        <Card.Row label="Sender" value={sender} />
        <Card.Row label="Receiver" value={receiver} />
        <Card.Row label="Description" value={description} />
      </Card.Body>
    </Card>
  );
}

export default Transaction;
