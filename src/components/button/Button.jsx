import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const Button = ({ page, titleButton }) => {
  return (
    <>
      <div className="button-container">
        <Link className="linkPages" to={page}>
          <button className="button-app"> {titleButton} </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
