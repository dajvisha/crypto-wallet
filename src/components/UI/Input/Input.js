import styles from './styles.module.css';

function Input(props) {
  const { required, type, label, placeholder, value, min, max, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
