import { Card, Empty } from '../../../components/UI';
import Balance from '../../../components/Balance';

import styles from './styles.module.css';

function Balances(props) {
    const { balances } = props;

    const Balances = () => (
        Object.entries(balances).map(([currency, amount], idx) => (
            <Balance
                key={idx}
                currency={currency}
                amount={amount} />
        ))
    );

    return (
        <Card shadow className={styles.card}>
            <Card.Title title="Your Balances" />
            <Card.Body>
                <div className={styles['balances-list']}>
                    {!Object.keys(balances).length && <Empty message="You don't have balances" />}
                    <Balances />
                </div>
            </Card.Body>
        </Card>
    );
}

export default Balances;
