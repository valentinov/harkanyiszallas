import React from 'react';

function Menu() {
    return (<nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#">Harkányi Szállás</a>
            </div>
            <div id="mainListDiv">
                <label className="menuItem">
                    <span class="menuText" data-text="true">Szálláshelyek</span></label>

                <li><a href="#">Élmények</a></li>
            </div>
        </div>
    </nav>);
}

export default Menu;