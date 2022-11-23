import {
    Card,
    Chip,
} from '../UI';

import { getCurrencyStyles } from '../../helpers/getCurrencyStyles';

import styles from './styles.module.css';

function Transaction(props) {
    const {
        amount,
        currency,
        status,
        sender,
        receiver,
        description,
    } = props.details;
    const balanceStyles = getCurrencyStyles(currency);

    return (
        <Card className={styles.transaction}>
            <Card.Header style={balanceStyles} className={styles.balance}>
                <div>
                    <Chip text={status} />
                </div>
                <div>
                    <p>{amount}</p>
                    <p>{currency}</p>
                </div>
            </Card.Header>
            <Card.Body className={styles.details}>
                <Card.Row>{sender}</Card.Row>
                <Card.Row>{receiver}</Card.Row>
                <Card.Row>{description}</Card.Row>
            </Card.Body>
        </Card>
    );
}

export default Transaction;
