import Card from '../../../components/Card';

import BalanceCard from '../../../components/BalanceCard';

import styles from './styles.module.css';

function Balances(props) {
    const { balances } = props;

    return (
        <Card className={styles.card}>
            {
                Object.entries(balances).map(([currency, amount]) => (
                    <BalanceCard currency={currency} amount={amount} />
                ))
            }
        </Card>
    );
}

export default Balances;
