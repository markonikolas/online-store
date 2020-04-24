import React from 'react';

const Landing = () => {
  return (
    <main className="container-fluid d-flex justify-content-center align-items-center">
      <div className="button-wrapper">
        <input
          className="btn btn-light btn-lg mr-4"
          type="button"
          value="View Products"
        />
        <input
          className="btn btn-outline-light btn-lg"
          type="button"
          value="Sign Up"
        />
      </div>
    </main>
  );
};

export default Landing;
