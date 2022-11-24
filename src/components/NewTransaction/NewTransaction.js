import { useEffect, useState } from 'react';

import { Button, Input, Modal, Select } from '../UI';

import { useMessages } from '../../contexts/MessagesProvider';
import { useWallet } from '../../contexts/WalletProvider';

import { currencies } from '../../constanst/currencies';

function NewTransaction(props) {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(currencies[0].value);
  const [description, setDescription] = useState('');

  const { contacts, fetchContacts, sendWalletTransaction } = useWallet();
  const { addMessage } = useMessages();

  if (receiver === '' && contacts.length > 0) {
    setReceiver(contacts[0].value);
  }

  const onSelectReceiver = (e) => {
    setReceiver(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSelectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const parsedAmount = parseFloat(amount);

      if (parsedAmount <= 0) {
        addMessage('error', 'Amount should be greater than 0.');
        return;
      }

      const data = {
        receiver,
        amount: parsedAmount,
        currency,
        description
      };

      const wasSuccessful = await sendWalletTransaction(data);
      if (wasSuccessful) {
        props.onClose();
      }
    } catch (error) {
      addMessage('error', 'There is an error with the values.');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Modal isOpen title="New Transaction" onClose={props.onClose}>
      <form onSubmit={onSubmit}>
        <Select label="Receiver" value={receiver} options={contacts} onSelect={onSelectReceiver} />
        <Input
          required
          type="number"
          label="Amount"
          placeholder="Amount"
          value={amount}
          onChange={onChangeAmount}
        />
        <Select
          label="Currency"
          value={currency}
          options={currencies}
          onSelect={onSelectCurrency}
        />
        <Input
          required
          type="text"
          label="Description"
          placeholder="Description"
          value={description}
          onChange={onChangeDescription}
        />
        <Button type="submit" label="Send money" />
      </form>
    </Modal>
  );
}

export default NewTransaction;
