import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/common/Header";
import CryptoDetails from "./components/CryptoDetails";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id" element={<CryptoDetails />} />
      </Routes>
    </>
  );
};

export default App;
