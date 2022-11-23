import styles from './styles.module.css';

function Input(props) {
    const {
        required,
        type,
        label,
        placeholder,
    } = props;

    return (
        <div>
            <label>{label}</label>
            <input
                required={required}
                type={type}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
}

export default Input;
