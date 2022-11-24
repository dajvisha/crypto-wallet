import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useLocalStorage('message', null);

    const addMessage = (type, message) => {
        setMessage({ type, message });
    };

    const removeMessage = () => {
        setMessage(null);
    }

    const value = {
        message,
        addMessage,
        removeMessage,
    };

    return (
        <MessageContext.Provider value={value}>
            {props.children}
        </MessageContext.Provider>
    );
}

export const useMessage = () => {
    return useContext(MessageContext);
};
