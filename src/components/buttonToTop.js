import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { animationConfig } from '../animations/scroll';
import ChevronUp from '../assets/icons/chevron-up.svg';

const ButtonToTop = (props) => {
  return (
    <button
      className="to-top-button btn btn-dark"
      onClick={() => scroll.scrollTo(0, animationConfig)}
      ref={props.buttonRef}>
      <img src={ChevronUp} alt="Go to Top" />
    </button>
  );
};
export default ButtonToTop;
