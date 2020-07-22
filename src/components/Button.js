import React from 'react';

function ButtonRound(props) {
    return (
        <button
            className="btn-round-light"
            type="button"
            aria-invalid="false"
            aria-pressed="false"
        >
            <span className="btn-round-text">
                {props.text}
            </span>
        </button>
    );
}

function ButtonRoundMenuItem(props) {
    return (
        <div className="menuItemButton">

            <ButtonRound text={props.text} />

        </div>

    );
}

export default ButtonRound;
export { ButtonRoundMenuItem };