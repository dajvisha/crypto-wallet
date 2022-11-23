import styles from './styles.module.css';

function Header(props) {
    const { style, className, children } = props;
    const classNames = `
        ${className}
        ${styles['card-header']}
    `;

    return (
        <div style={style} className={classNames}>
            {children}
        </div>
    );
}

function Title(props) {
    const { title } = props;

    if (!title) {
        return;
    }

    return (
        <h4 className={styles['card-title']}>{title}</h4>
    );
}

function Body(props) {
    const { className, children } = props;
    const classNames = `
        ${className}
        ${styles['card-body']}
    `;

    return (
        <div
            className={classNames}>
            {children}
        </div>
    );
}

function Row(props) {
    const { children } = props;

    return (
        <div>{children}</div>
    );
}

Card.Header = Header;
Card.Title = Title;
Card.Body = Body;
Card.Row = Row;

export function Card(props) {
    const {
        shadow,
        style,
        className,
        title,
        children,
    } = props;

    const classNames = `
        ${className}
        ${styles.card}
        ${shadow && styles['card-shadow']}
    `;

    return (
        <div style={style} className={classNames}>
            {children}
        </div>
    );
}
