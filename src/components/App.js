import React from 'react';
import Button from './Button';
import { MenuItemBtnRound } from './Button';
import HeroImg from './Hero';
import subMenu from '../subMenu';
import Card from './Card';
import Attraction from '../attractions';

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
      <div class="row three-card-section">

        {Attraction.map(e => (<Card key={e.key} title={e.title} content={e.content} />))}

      </div>

    </div>
  );
}

export default App;
