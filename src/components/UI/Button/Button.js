import styles from './styles.module.css';

function Button(props) {
    const { type, label } = props;

    return (
        <button
            type={type}
            className={styles.button}>
            {label}
        </button>
    );
}

export default Button;
