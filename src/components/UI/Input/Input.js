import styles from './styles.module.css';

function Input(props) {
    const {
        required,
        type,
        label,
        placeholder,
        value,
        onChange,
    } = props;

    return (
        <div>
            <label>{label}</label>
            <input
                required={required}
                type={type}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
