import { Button, Logo } from '../UI';

import styles from './styles.module.css';

function Navbar(props) {
    const { logout } = props;

    return (
        <div className={styles.navbar}>
            <div className={styles['navbar-logo']}>
                <Logo />
            </div>
            <div className={styles['navbar-logout']}>
                <Button type="button" label="Log out" />
            </div>
        </div>
    );
}

export default Navbar;
