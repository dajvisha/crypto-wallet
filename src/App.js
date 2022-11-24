import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';
import { MessagesProvider } from './contexts/MessagesProvider';
import { WalletProvider } from './contexts/WalletProvider';

import Login from './views/Login';
import MessagesView from './views/MessagesView';
import ProtectedView from './views/ProtectedView';
import Wallet from './views/Wallet';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <MessagesProvider>
      <MessagesView />
      <NewTransaction />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="wallet"
              element={
                <ProtectedView>
                  <WalletProvider>
                    <Wallet />
                  </WalletProvider>
                </ProtectedView>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </MessagesProvider>
  );
}

export default App;
