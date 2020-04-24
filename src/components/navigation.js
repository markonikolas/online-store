import React from 'react';

/* replace 'a' link with react-router's LINK */

const Navigation = (props) => {
  return (
    <nav>
      <ul className="d-flex justify-content-end">
        <li className="mr-5">
          <a href="/">Products</a>
        </li>
        <li className="mr-5">
          <a href="/">What We Do</a>
        </li>
        <li className="mr-2">
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
