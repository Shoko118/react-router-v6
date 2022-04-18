import { Route, Routes } from "react-router-dom";
import Nested from "./Nested";

const About = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <Routes>
        <Route path="nested" element={<Nested />} />
      </Routes>
    </div>
  );
};

export default About;
