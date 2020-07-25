import React from 'react';
import Button from './Button';
import { MenuItemBtnRound } from './Button';
import HeroImg from './Hero';
import subMenu from '../subMenu';
import Card from './Card';

function CreateSubMenu(i) {
  return (<MenuItemBtnRound text={i.name} href={i.href} />);
}

function App() {
  return (
    <div>
      <HeroImg />

      <div className="submenu">
        {subMenu.map(CreateSubMenu)}
      </div>
      <div class="row left-right-80">
        <div class="col-sm-4 left-right-5">
          <Card />
        </div>
        <div class="col-sm-4 left-right-5">
          <Card />
        </div>
        <div class="col-sm-4 left-right-5">
          <Card />
        </div>
      </div>

    </div>
  );
}

export default App;
