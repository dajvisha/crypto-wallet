import { Card } from '../UI';

import { generateCardColor } from './helpers';

import styles from './styles.module.css';

function Balance(props) {
    const { currency, amount } = props;

    return (
        <Card
            shadow
            style={generateCardColor()}
            className={styles.card}>
            <p>{currency}</p>
            <p>{amount}</p>
        </Card>
    );
}

export default Balance;
