import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const MessagesContext = createContext();

export function MessagesProvider(props) {
  const [message, setMessage] = useLocalStorage('message', null);

  const addMessage = (type, message, sticky = false) => {
    setMessage({ type, message, sticky });
  };

  const removeMessage = () => {
    setMessage(null);
  };

  const value = {
    message,
    addMessage,
    removeMessage
  };

  return <MessagesContext.Provider value={value}>{props.children}</MessagesContext.Provider>;
}

export const useMessages = () => {
  return useContext(MessagesContext);
};
