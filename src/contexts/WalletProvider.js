import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userWallet } from './api';

import { useAuth } from './AuthProvider';
import { useMessages } from './MessagesProvider';

const WalletContext = createContext();

export function WalletProvider(props) {
  const [balances, setBalances] = useState({});
  const [transactions, setTransactions] = useState([]);
  const { addMessage } = useMessages();

  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const fetchWallet = async () => {
    try {
      const data = await userWallet(token);
      if (data) {
        const { balance, transactions } = data;
        setBalances(balance);
        setTransactions(transactions);
      }
    } catch (error) {
      const callback = () => navigate('/');
      logout(callback);
      addMessage('error', error.message);
    }
  };

  const value = {
    balances,
    transactions,
    fetchWallet
  };

  return <WalletContext.Provider value={value}>{props.children}</WalletContext.Provider>;
}

export const useWallet = () => {
  return useContext(WalletContext);
};
