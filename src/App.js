import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthProvider";
import { WalletProvider } from "./contexts/WalletProvider";

import Login from './views/Login';
import ProtectedView from "./views/ProtectedView";
import Wallet from './views/Wallet';

function App() {
  return (
    <div style={{ height: '100%'}}>
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
    </div>
  );
}

export default App;
