import styles from './styles.module.css';

function View(props) {
    const { children } = props;

    return (
        <div className={styles.view}>
            { children }
        </div>
    );
}

export default View;
