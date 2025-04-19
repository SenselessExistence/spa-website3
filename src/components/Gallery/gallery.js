import "./gallery.css";
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from "react";

const images = [
  { src: '/images/image-gallery-1.jpg', width: 1013, height: 1800 }];

function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
        <div id="gallery">
          <div className="container">
            <h2> Gallery </h2>
            <p> Check out some of our recent projects. </p>
            </div>
            <div>
      <div className="gallery">
        {images.map((image, i) => (
          <img
            key={image}
            className="gallery-image"
            src={image.src}
            alt={image.src}
            title={image.src}
            onClick={() => setIndex(i)}
            quality={10}
          />
        ))}
      </div>

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
        </div>
  );
}

export default Gallery;