import React from 'react';
import HeroImg from './Hero';
import Card from './Card';
import subMenu from '../subMenu';
import attractions from '../attractions';
import { MenuItemBtnRound } from './Button';

function CreateSubMenu(i) {
    return (<MenuItemBtnRound text={i.name} href={i.href} />);
  }

const Home = () => {
    return (
        <div>
            <HeroImg />

            <div className="submenu">
                {subMenu.map(CreateSubMenu)}
            </div>
            <div class="home__section">

                {attractions.map(e => (<Card key={e.key} title={e.title} content={e.content} img={e.img} />))}

            </div>
        </div>);
}



export default Home;