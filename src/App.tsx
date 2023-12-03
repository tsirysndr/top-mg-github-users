import { BrowserRouter, Route, Routes } from "react-router-dom";
import TotalContributions from "./Pages/TotalContributions";
import PublicContributions from "./Pages/PublicContributions";
import Followers from "./Pages/Followers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicContributions />} />
        <Route path="/total" element={<TotalContributions />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="*" element={<TotalContributions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
