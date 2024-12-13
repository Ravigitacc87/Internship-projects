import React, { useState } from "react";
import "./App.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <div
        className={`image-box ${active === 1 ? "active" : ""}`}
        onMouseEnter={() => setActive(1)}
      >
        <div className="text">Deer</div>
        <img src={img1} alt="Image 1" />
      </div>

      <div
        className={`image-box ${active === 0 ? "active" : ""}`}
        onMouseEnter={() => setActive(0)}
      >
        <div className="text">Deer</div>
        <img src={img2} alt="Image 2" />
      </div>

      <div
        className={`image-box ${active === 2 ? "active" : ""}`}
        onMouseEnter={() => setActive(2)}
      >
        <div className="text">Tiger</div>
        <img src={img3} alt="Image 3" />
      </div>
    </div>
  );
}

export default App;
