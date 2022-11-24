import styles from './styles.module.css';

function Select(props) {
  const { label, value, options, onSelect } = props;

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onSelect} className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
