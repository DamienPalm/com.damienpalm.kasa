import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/accommodation/:AccommodationId"
            element={<Accommodation />}
          />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
