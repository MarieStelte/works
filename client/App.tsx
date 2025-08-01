import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Traineeship from "./pages/Traineeship";
import Freelance from "./pages/Freelance";
import Academic from "./pages/Academic";
import Professional from "./pages/Professional";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/traineeship" element={<Traineeship />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/professional" element={<Professional />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
