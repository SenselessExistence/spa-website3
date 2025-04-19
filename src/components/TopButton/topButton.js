import "./topButton.css";
import { useState, useEffect } from "react";

function TopButton(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const Scroll = () => {window.scrollTo({top:0, behavior:"smooth"})};
  
  return(
    <button className={`topButton ${isVisible ? "appear" : "disappear"}`} onClick={Scroll}>
      ⯅
    </button>
  )
}

export default TopButton;