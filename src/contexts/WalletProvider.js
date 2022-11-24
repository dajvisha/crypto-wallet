import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userWallet, userContacts, sendTransaction } from './api';

import { useAuth } from './AuthProvider';
import { useMessages } from './MessagesProvider';

const WalletContext = createContext();

export function WalletProvider(props) {
  const [balances, setBalances] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [contacts, setContacts] = useState([]);
  const { addMessage } = useMessages();
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const fetchWallet = async () => {
    try {
      const data = await userWallet(token);
      if (data) {
        const { balance, transactions } = data;
        setBalances(balance);
        setTransactions(transactions.reverse());
      }
    } catch (error) {
      const callback = () => navigate('/');
      logout(callback);
      addMessage('error', error.message);
    }
  };

  const fetchContacts = async () => {
    try {
      const data = await userContacts(token);
      if (data) {
        const contacts = data.map((contact) => ({
          label: `${contact.name} (${contact.email})`,
          value: contact.email
        }));
        setContacts(contacts);
      }
    } catch (error) {
      addMessage('error', error.message);
    }
  };

  const sendWalletTransaction = async (transaction) => {
    try {
      const data = await sendTransaction(transaction, token);
      if (data) {
        fetchWallet();
        addMessage('success', 'You successfully made a transfer.');
        return true;
      }

      return false;
    } catch (error) {
      addMessage('error', error.message);
    }
  };

  const value = {
    balances,
    transactions,
    contacts,
    fetchWallet,
    fetchContacts,
    sendWalletTransaction
  };

  return <WalletContext.Provider value={value}>{props.children}</WalletContext.Provider>;
}

export const useWallet = () => {
  return useContext(WalletContext);
};
