import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

/* animation config */
import { animationConfig } from '../animations/scroll';

const Landing = ({ menuOpen }) => {
  const isOpen = menuOpen ? 'shrink' : '';
  return (
    <main
      className={`container-fluid d-flex mb-5 justify-content-center align-items-center ${isOpen}`}>
      <div className="button-wrapper">
        <ScrollLink to="products" {...animationConfig}>
          <input
            className="btn btn-dark btn-lg"
            type="button"
            value="View Our Products"
          />
        </ScrollLink>
      </div>
    </main>
  );
};

export default Landing;
