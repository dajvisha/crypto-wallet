import logo from './logo.png';

import styles from './styles.module.css';

function Logo() {
    return (
        <img
            alt="logo"
            src={logo}
            className={styles.logo}
        />
    );
}

export default Logo;
