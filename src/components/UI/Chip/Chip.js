import styles from './styles.module.css';

function Chip(props) {
    const { text } = props;

    return (
        <div className={styles.chip}>
            {text}
        </div>
    );
}

export default Chip;
