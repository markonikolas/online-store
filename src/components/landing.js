import React, { Fragment } from 'react';
import { Link as ScrollLink } from 'react-scroll';

/* animation config */
import { animationConfig } from '../animations/scroll';

const Landing = ({ menuOpen }) => {
  const isOpen = menuOpen ? 'shrink' : '';
  return (
    <Fragment>
      <main
        className={`container-fluid d-flex mb-5 justify-content-center align-items-center ${isOpen}`}>
        <div className="button-wrapper">
          <ScrollLink to="products" {...animationConfig}>
            <input
              className="btn btn-dark btn-lg mr-4"
              type="button"
              value="View Products"
            />
          </ScrollLink>
          <input
            className="btn btn-outline-primary btn-lg"
            type="button"
            value="Sign Up"
          />
        </div>
      </main>
    </Fragment>
  );
};

export default Landing;
