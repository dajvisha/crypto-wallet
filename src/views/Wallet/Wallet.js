import { useEffect } from 'react';

import { useWallet } from '../../contexts/WalletProvider';
import { View } from '../../components/UI';

import Balances from './Balances';
import Transactions from './Transactions';

import styles from './styles.module.css';

function Wallet() {
    const {
        balances,
        transactions,
        fetchWallet,
    } = useWallet();

    useEffect(() => {
        fetchWallet();
    }, []);

    return (
        <View>
            <div className={styles.content}>
                <Balances balances={balances} />
                <Transactions transactions={transactions} />
            </div>
        </View>
    );
}

export default Wallet;
