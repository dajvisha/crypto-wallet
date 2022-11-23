import { useState } from 'react';

import { Button, Card } from '../../../components/UI';
import Transaction from '../../../components/Transaction';

import styles from './styles.module.css';

const transactionsMock = [
    {
        "description": "MyWallet transaction",
        "amount": 0.05,
        "currency": "ETH",
        "sender": "victoria@belvo.com",
        "receiver": "pablo@belvo.com",
        "status": "Done"
    },
    {
        "description": "MyWallet transaction",
        "amount": 0.05,
        "currency": "ETH",
        "sender": "victoria@belvo.com",
        "receiver": "pablo@belvo.com",
        "status": "Done"
    },
];

function Transactions() {
    const [transactions, setTransactions] = useState(transactionsMock);

    return (
        <Card shadow>
            <Card.Title title="Your Transactions" />
            <div className={styles['add-transaction']}>
                <Button
                    type="button"
                    label="New Transaction" />
            </div>
            <div className={styles.transactions}>
                {
                    transactions.map((transaction) => (
                        <Transaction details={transaction} />
                    ))
                }
            </div>
        </Card>
    );
}

export default Transactions;
