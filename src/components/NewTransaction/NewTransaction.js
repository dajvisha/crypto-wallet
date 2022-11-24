import { useState } from 'react';

import { Button, Input, Modal } from '../UI';

function NewTransaction() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Modal title="New Transaction">
      <form>
        <Input
          required
          type="text"
          label="Description"
          placeholder="Description"
          value={description}
          onChange={onChangeDescription}
        />
        <Input
          required
          type="number"
          label="Amount"
          placeholder="Amount"
          value={amount}
          onChange={onChangeAmount}
        />
        <Button type="submit" label="Send money" />
      </form>
    </Modal>
  );
}

export default NewTransaction;
