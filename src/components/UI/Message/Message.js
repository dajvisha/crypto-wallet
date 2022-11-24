import styles from './styles.module.css';

function Message(props) {
  const { type, message } = props;

  const classNames = `${styles.message} ${styles[type]}`;

  return <div className={classNames}>{message}</div>;
}

export default Message;
