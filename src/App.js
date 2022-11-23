import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './views/Login';
import Wallet from './views/Wallet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
