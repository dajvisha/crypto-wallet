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
            <div className={styles.row}>
                <h4>Currency: </h4>
                <p>{currency}</p>
            </div>
            <div className={styles.row}>
                <h4>Balance: </h4>
                <p>{amount}</p>
            </div>
        </Card>
    );
}

export default Balance;
