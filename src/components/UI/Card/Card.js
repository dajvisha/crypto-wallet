import styles from './styles.module.css';

function Card(props) {
    const {
        shadow,
        style,
        className,
        title,
        children,
    } = props;

    const classNames = `${className} ${styles.card} ${shadow && styles.shadow}`;
    return (
        <div
            style={style}
            className={classNames}>
            {title && <h4 className={styles.title}>{title}</h4>}
            { children }
        </div>
    );
}

export default Card;
