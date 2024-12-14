import React, { useState } from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    "https://d31ezp3r8jwmks.cloudfront.net/nr9p5isqq3yn41tqrh1tr4lttr1v",
    "https://www.coursesxpert.com/wp-content/uploads/2021/01/Java-Course.jpg",
    "https://e-courses4you.com/wp-content/uploads/2020/04/html-and-css.jpg"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} className="myimages" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
