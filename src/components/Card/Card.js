import styles from './styles.module.css';

function Card(props) {
    const {
        shadow,
        style,
        className,
        children,
    } = props;

    const classNames = `${className} ${styles.card} ${shadow && styles['card-shadow']}`;
    return (
        <div
            style={style}
            className={classNames}>
            { children }
        </div>
    );
}

export default Card;
