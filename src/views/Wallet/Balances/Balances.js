import { Card } from '../../../components/UI';
import Balance from '../../../components/Balance';

import styles from './styles.module.css';

function Balances(props) {
    const { balances } = props;

    return (
        <Card shadow>
            <Card.Title title="Your Balances" />
            <Card.Body>
                <div className={styles['balances-list']}>
                    {
                        Object.entries(balances).map(([currency, amount], idx) => (
                            <Balance
                                key={idx}
                                currency={currency}
                                amount={amount} />
                        ))
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

export default Balances;
