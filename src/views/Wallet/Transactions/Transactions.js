import { Button, Card, Empty } from '../../../components/UI';
import Transaction from '../../../components/Transaction';

import styles from './styles.module.css';

function Transactions(props) {
    const { transactions } = props;

    const Transactions = () => (
        transactions.map((transaction, idx) => (
            <Transaction key={idx} details={transaction} />
        ))
    );

    return (
        <Card shadow>
            <Card.Title title="Your Transactions" />
            <Card.Body>
                <div className={styles['add-transaction']}>
                    <Button
                        type="button"
                        label="New Transaction" />
                </div>
                <div className={styles['transactions-list']}>
                    {!transactions.length && <Empty message="You don't have transactions" />}
                    <Transactions />
                </div>
            </Card.Body>
        </Card>
    );
}

export default Transactions;
