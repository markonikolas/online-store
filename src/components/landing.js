import React, { Fragment } from 'react';

const Landing = ({ open, onClick }) => {
  const isOpen = open ? 'shrink' : '';
  return (
    <Fragment>
      <main
        className={`container-fluid d-flex mb-5 justify-content-center align-items-center ${isOpen}`}>
        <div className="button-wrapper">
          <input
            className="btn btn-dark btn-lg mr-4"
            type="button"
            value="View Products"
            onClick={onClick}
          />
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
