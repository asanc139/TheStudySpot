import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/Logo.jpg';

export default function Footer() {
  // get the navigate function
  const navigate = useNavigate();

  const goBack = () => {
    // imperatively redirect back
    navigate(-1);
  };

  const goForward = () => {
    // imperatively redirect forward
    navigate(1);
  };

  return (
    <div className="button-container">
      <div className="button-left">
        <button onClick={goBack}>Back</button>
      </div>
      <div className="button-right">
        <button onClick={goForward}>Forward</button>
      </div>
    </div>
  );
}
