import { useEffect } from 'react';

import { useMessage } from "../../contexts/MessagesProvider";

import { Message } from '../../components/UI';

function MessagesView() {
    const { message, removeMessage } = useMessage();

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                removeMessage();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message, removeMessage]);

    if (!message) {
        return null;
    }

    return <Message type={message.type} message={message.message} />
}

export default MessagesView;
