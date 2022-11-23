import { Card } from '../UI';

import { getCurrencyStyles } from '../../helpers/getCurrencyStyles';

import styles from './styles.module.css';

function Balance(props) {
    const { currency, amount } = props;
    const inlineStyles = getCurrencyStyles(currency)

    return (
        <Card
            shadow
            style={inlineStyles}
            className={styles.card}>
            <Card.Row>
                <p>{amount}</p>
            </Card.Row>
            <Card.Row>
                <p>{currency}</p>
            </Card.Row>
        </Card>
    );
}

export default Balance;
