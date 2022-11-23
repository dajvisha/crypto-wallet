import logo from './logo.png';

import styles from './styles.module.css';

function Logo() {
    return (
        <img
            src={logo}
            className={styles.logo}
        />
    );
}

export default Logo;
