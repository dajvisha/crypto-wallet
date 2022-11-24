import { useEffect } from 'react';

import { useMessages } from '../../contexts/MessagesProvider';

import { Message } from '../../components/UI';

function MessagesView() {
  const { message, removeMessage } = useMessages();

  useEffect(() => {
    if (message && !message.stick) {
      const timer = setTimeout(() => {
        removeMessage();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, removeMessage]);

  if (!message) {
    return null;
  }

  return <Message type={message.type} message={message.message} />;
}

export default MessagesView;
