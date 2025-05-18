import "./gallery.css";
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from "react";

const images = [
  { src: '/images/image-gallery-2.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-3.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-4.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-5.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-6.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-7.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-8.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-9.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-2.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-3.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-4.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-5.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-6.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-7.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-8.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-9.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-2.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-3.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-4.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-5.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-6.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-7.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-8.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-9.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-2.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-3.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-4.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-5.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-6.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-7.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-8.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-9.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-7.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-8.jpg', width: 1013, height: 1800 },
  { src: '/images/image-gallery-10.jpg', width: 1013, height: 1800 }];

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