import React from 'react';
import Button from './Button';
import { ButtonRoundMenuItem } from './Button';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <div className="submenu">
      <ButtonRoundMenuItem text='A gomb szövege'/>
      <ButtonRoundMenuItem text='A gomb szövege'/>
      <ButtonRoundMenuItem text='A gomb szövege'/>
      <ButtonRoundMenuItem text='A gomb szövege'/>

      </div>

    </div>
  );
}

export default App;
