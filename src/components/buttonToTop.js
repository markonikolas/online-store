import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { animationConfig } from '../animations/scroll';

import Icon from './icons/icon';
import ChevronUpSVG from '../assets/icons/chevron-up.svg';

const ButtonToTop = ({ buttonRef }) => {
  return (
    <button
      ref={buttonRef}
      className="to-top-button btn btn-dark btn-sm"
      onClick={() => scroll.scrollTo(0, animationConfig)}>
      <Icon name={ChevronUpSVG} alt="Go to Top" />
    </button>
  );
};
export default ButtonToTop;
