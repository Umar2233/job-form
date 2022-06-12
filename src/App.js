import PageOne from "./pages/pageOne/PageOne";
import PageTwo from "./pages/pageTwo/PageTwo"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/pageTwo" element={<PageTwo />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
