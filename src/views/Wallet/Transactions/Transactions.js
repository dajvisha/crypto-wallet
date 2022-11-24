import { useState } from 'react';

import { Button, Card, Empty } from '../../../components/UI';
import Transaction from '../../../components/Transaction';
import NewTransaction from '../../../components/NewTransaction';

import styles from './styles.module.css';

function Transactions(props) {
  const [isCreatingTransaction, setIsCreatingTransaction] = useState(false);
  const { transactions } = props;

  const onOpenNewTransaction = () => {
    setIsCreatingTransaction(true);
  };

  const onCloseNewTransaction = () => {
    setIsCreatingTransaction(false);
  };

  const Transactions = () =>
    transactions.map((transaction, idx) => <Transaction key={idx} details={transaction} />);

  return (
    <Card shadow>
      {isCreatingTransaction && <NewTransaction onClose={onCloseNewTransaction} />}
      <Card.Title title="Your Transactions" />
      <Card.Body>
        <div className={styles['add-transaction']}>
          <Button type="button" label="New Transaction" onClick={onOpenNewTransaction} />
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
