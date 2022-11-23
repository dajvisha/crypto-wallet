import { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

const mockBalances = {
    "ETH": 0.5297999999889995,
    "DOGE": 0.0,
    "BTC": 0.06970000000000004,
};

const mockTransactions = [
    {
        "description": "MyWallet transaction",
        "amount": 0.05,
        "currency": "ETH",
        "sender": "victoria@belvo.com",
        "receiver": "pablo@belvo.com",
        "status": "Done"
    },
    {
        "description": "MyWallet transaction",
        "amount": 0.05,
        "currency": "ETH",
        "sender": "victoria@belvo.com",
        "receiver": "pablo@belvo.com",
        "status": "Done"
    },
];

export function WalletProvider(props) {
    const [balances, setBalances] = useState(mockBalances);
    const [transactions, setTransactions] = useState(mockTransactions);

    const value = {
        balances,
        transactions,
    };

    return (
        <WalletContext.Provider value={value}>
            {props.children}
        </WalletContext.Provider>
    );
}

export const useWallet = () => {
    return useContext(WalletContext);
};
