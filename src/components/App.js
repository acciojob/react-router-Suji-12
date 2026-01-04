// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const Home = () => {
//   return <h2>Welcome to my website!</h2>;
// };

// const About = () => {
//   return <h2>This is a sample React Router program.</h2>;
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to my website!</h2>}
        />
        <Route
          path="/about"
          element={<h2>This is a sample React Router program.</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
