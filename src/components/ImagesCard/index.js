import React from "react";
import "./style.css";

function ImagesCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.img} />
            </div>
            <div className="content">
                <ul>
                    <strong>Name:</strong> {props.name}
                    <img alt={props.name} src={props.image} />
                </ul>
            </div>
        </div>
    )
};

export default ImagesCard;