import View from '../../components/View';

import Balances from './Balances';
import Transactions from './Transactions';

import styles from './styles.module.css';

function Wallet() {
    return (
        <View>
            <div className={styles.content}>
                <Balances />
                <Transactions />
            </div>
        </View>
    );
}

export default Wallet;
