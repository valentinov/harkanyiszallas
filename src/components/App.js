import React from 'react';
import Button from './Button';
import { MenuItemBtnRound } from './Button';

function App() {
  return (
    <div>
      <div className="submenu">
      <MenuItemBtnRound text='Csoportoknak' href='#'/>
      <MenuItemBtnRound text='Családbarát'/>
      <MenuItemBtnRound text='Állatbarát'/>
      </div>

    </div>
  );
}

export default App;
