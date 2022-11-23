import styles from './styles.module.css';

function Button(props) {
    const {
        type,
        label,
        onClick
    } = props;

    return (
        <button
            type={type}
            className={styles.button}
            onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
