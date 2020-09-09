import React from 'react';
import { Link } from 'react-router-dom';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <Link to='/'>
                <div className="header__brand" >Harkányi Szállás</div>
            </Link>
            <div className="header__center">
                <Link className="none" to='/'>
                    <div className="header__search">
                        <div className="header__searchText">Keressen akciót, csomagot, élményt</div>
                        <div className="header__searchIconBG"><SearchSharpIcon className="header__searchIcon" /></div>
                    </div>
                </Link>
            </div>
            <div className="header__right">
                <LanguageIcon />
                <ExpandMoreIcon />

                <a href="/register" className="registerLink">Regisztráljon most!</a>


            </div>

        </nav>

    );
}

export default Header;