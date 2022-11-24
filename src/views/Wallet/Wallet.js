import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthProvider';
import { useWallet } from '../../contexts/WalletProvider';
import { View } from '../../components/UI';

import Balances from './Balances';
import Transactions from './Transactions';

import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

function Wallet() {
  const { logout } = useAuth();
  const { balances, transactions, fetchWallet } = useWallet();
  const navigate = useNavigate();

  const onLogout = () => {
    const callback = () => navigate('/');
    logout(callback);
  };

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  return (
    <View>
      <View.Header>
        <Navbar logout={onLogout} />
      </View.Header>
      <View.Body className={styles['view-body']}>
        <div className={styles.content}>
          <div className={styles.balances}>
            <Balances balances={balances} />
          </div>
          <div className={styles.transactions}>
            <Transactions transactions={transactions} />
          </div>
        </div>
      </View.Body>
    </View>
  );
}

export default Wallet;
