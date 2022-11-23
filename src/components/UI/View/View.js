import styles from './styles.module.css';

function Header(props) {
    return <div>{props.children}</div>;
}

function Body(props) {
    return <div className={styles['view-body']}>{props.children}</div>;
}

View.Header = Header;
View.Body = Body;

export function View(props) {
    return (
        <div className={styles.view}>
            {props.children}
        </div>
    );
}

