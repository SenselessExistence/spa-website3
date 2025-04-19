import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      id="home"
      className={isVisible ? "fade-in" : ""}
      style={{
        backgroundImage: `url("${window.location.origin}/images/background.jpg")`,
      }}
    >
      <div className="container">
        <h1>Flooring that changes everything</h1>
      </div>
    </div>
  );
}

export default Home;
