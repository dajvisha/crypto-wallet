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
    const {
        balances,
        transactions,
        fetchWallet,
    } = useWallet();
    const navigate = useNavigate();

    const onLogout = () => {
        const callback = () => navigate('/');
        logout(callback);
    };

    useEffect(() => {
        fetchWallet();
    }, []);

    return (
        <View>
            <View.Header>
                <Navbar logout={onLogout} />
            </View.Header>
            <View.Body>
                <div className={styles.content}>
                    <Balances balances={balances} />
                    <Transactions transactions={transactions} />
                </div>
            </View.Body>
        </View>
    );
}

export default Wallet;
