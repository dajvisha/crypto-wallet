import { Card } from '../../../components/UI';
import Balance from '../../../components/Balance';

import styles from './styles.module.css';

function Balances(props) {
    const { balances } = props;

    return (
        <Card className={styles.card}>
            <Card.Title title="Your Balances" />
            {
                Object.entries(balances).map(([currency, amount], idx) => (
                    <Balance
                        key={idx}
                        currency={currency}
                        amount={amount} />
                ))
            }
        </Card>
    );
}

export default Balances;
