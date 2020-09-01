import React from 'react';

const ButtonRound = (props) => {
    return (
        <a className="btn-round-light" role="button" href={props.href}>
            <span className="btn-round-text">
                {props.text}
            </span>
        </a>
    );
}

const MenuItemBtnRound = (props) => {
    return (
        <div id="menuItemBtn">

            <ButtonRound text={props.text} href={props.href} />

        </div>

    );
}

export default ButtonRound;
export { MenuItemBtnRound };