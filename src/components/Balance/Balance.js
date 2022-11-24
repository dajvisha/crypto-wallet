import { Card } from '../UI';

import { getCurrencyStyles } from '../../helpers/getCurrencyStyles';

import styles from './styles.module.css';

function Balance(props) {
  const { currency, amount } = props;
  const inlineStyles = getCurrencyStyles(currency);

  return (
    <Card style={inlineStyles} className={styles.card}>
      <p>{amount}</p>
      <p>{currency}</p>
    </Card>
  );
}

export default Balance;
