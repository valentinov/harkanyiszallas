import React from 'react';
import './Hero.css';
import { Button } from '@material-ui/core';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

const HeroImg = () => {
  return (<div className="hero">
    <div className="hero__text">
      <h1>Harkányi Utazás</h1>
      <h5>Kikapcsol, feltölt, pihentet</h5>
      <Button endIcon={<ChevronRightSharpIcon/>}>Fedezze fel</Button>
    </div>
  </div>);
}

export default HeroImg;