import { useEffect, useState } from "react";
import "./priceList.css";

function PriceList() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // Задержка перед появлением
  }, []);

  return (
    <div className={`price-list ${visible ? "visible" : ""}`}>
      <div className="price-card">
        <h3>Estimates</h3>
        <p className="small-text">Always</p>
        <p className="price">
          <span className="dollar">$</span>Free
        </p>
        <p className="small-text">Give us a call</p>
      </div>

      <div className="price-card">
        <h3>Tile Installation</h3>
        <p className="small-text">from</p>
        <p className="price">
          <span className="dollar">$</span>3.00
        </p>
        <p className="small-text">per sqft</p>
      </div>

      <div className="price-card">
        <h3>Vinyl/Laminate Installation</h3>
        <p className="small-text">from</p>
        <p className="price">
          <span className="dollar">$</span>2.20
        </p>
        <p className="small-text">per sqft</p>
      </div>
    </div>
  );
}

export default PriceList;
