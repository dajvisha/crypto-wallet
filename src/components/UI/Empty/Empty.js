import icon from './icon.png';

import styles from './styles.module.css';

function Empty(props) {
    const { message } = props;
    
    return (
        <div className={styles.empty}>
            <img className={styles.icon} alt="empty" src={icon} />
            <p>{message}</p>
        </div>
    );
}

export default Empty;
