import { Routes, Route } from "react-router-dom";
import  URLShortener from "./pages/URLShortener";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<URLShortener />} />
        <Route path="/:code" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App