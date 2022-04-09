import { Routes, Route } from "react-router-dom";
import One from "../components/One";
import Two from "../components/Two";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/registration/one" element={<One />} />
        <Route path="/registration/two" element={<Two />} />
      </Routes>
    </div>
  );
}

export default Router;
