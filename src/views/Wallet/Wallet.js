import { useState } from 'react';

import { View } from '../../components/UI';

import Balances from './Balances';
import Transactions from './Transactions';

import styles from './styles.module.css';

const mockBalances = {
    "ETH": 0.5297999999889995,
    "DOGE": 0.0,
    "BTC": 0.06970000000000004,
};

function Wallet() {
    const [balances, setBalances] = useState(mockBalances);

    return (
        <View>
            <div className={styles.content}>
                <Balances balances={balances} />
                <Transactions />
            </div>
        </View>
    );
}

export default Wallet;
