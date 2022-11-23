import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthProvider";

import Login from './views/Login';
import ProtectedView from "./views/ProtectedView";
import Wallet from './views/Wallet';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="wallet"
              element={
                <ProtectedView>
                  <Wallet />
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
