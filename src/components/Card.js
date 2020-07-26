import React from 'react';

function Card(props) {
    return (
        <div class="col-sm-4 left-right-5">
        <div className="card card-custom">
            <img className="card-img-top" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/photo/photo-1484154218962-a197022b5858.jpg" alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>

            </div>
        </div>
        </div>
    );
}

export default Card;