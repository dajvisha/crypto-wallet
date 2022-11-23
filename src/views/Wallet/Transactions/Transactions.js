import { useState } from 'react';

import { Button, Card } from '../../../components/UI';
import Transaction from '../../../components/Transaction';

import styles from './styles.module.css';

function Transactions(props) {
    const { transactions } = props;

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
                    transactions.map((transaction, idx) => (
                        <Transaction key={idx} details={transaction} />
                    ))
                }
            </div>
        </Card>
    );
}

export default Transactions;
