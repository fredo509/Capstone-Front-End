import React, { useRef, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import useEmblaCarousel from 'embla-carousel-react';
import data from '../data/data.json';
import '../styles/Carousel.css';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, embla] = useEmblaCarousel(options);
  const containerRef = useRef();

  const chunkedData = useMemo(() => {
    const chunkedArray = [];
    for (let i = 0; i < data.length; i += 3) {
      chunkedArray.push(data.slice(i, i + 3));
    }
    return chunkedArray;
  }, []);

  useEffect(() => {
    if (embla) {
      const slideContainers = embla.slideNodes();
      slideContainers.forEach((slideContainer) => {
        const cards = slideContainer.querySelectorAll('.card-container');
        const chunkedCards = chunkedData.shift(); // Get the next set of chunked cards
        if (chunkedCards) {
          cards.forEach((card, index) => {
            const cardData = chunkedCards[index];
            const newCardContent = document.createElement('div');
            newCardContent.className = 'inner-card';
            newCardContent.innerHTML = `
              <h2>${cardData.name}</h2>
              <a href="/">
                <img
                  class="embla__slide__img"
                  src="${cardData.img}"
                  alt="Your alt text"
                />
              </a>
              <p>${cardData.description}</p>
              <p>${cardData.price}</p>
            `;
            card.appendChild(newCardContent);
          });
        }
      });
    }
  }, [embla, chunkedData]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container" ref={containerRef}>
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="card-container" />
              <div className="card-container" />
              <div className="card-container" />
              <p>ArrowRight</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

EmblaCarousel.propTypes = {
  options: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default EmblaCarousel;
