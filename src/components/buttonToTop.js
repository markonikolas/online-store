import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { animationConfig } from '../animations/scroll';
import ChevronUp from '../assets/icons/chevron-up.svg';

const ButtonToTop = ({ buttonRef }) => {
  return (
    <button
      ref={buttonRef}
      className="to-top-button btn btn-dark btn-sm"
      onClick={() => scroll.scrollTo(0, animationConfig)}>
      <img src={ChevronUp} alt="Go to Top" />
    </button>
  );
};
export default ButtonToTop;
