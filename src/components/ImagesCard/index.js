import React from "react";
import "./style.css";


function ImagesCard(props) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="content">
                        <ul>
                            <button className="btn">
                            <img 
                            className="text-nowrap"
                            alt={"Click me I'm " + props.name} 
                            src={props.image}
                            onClick= {() => props.imageClick(props.id)}
                            />
                            </button>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
    )
};

export default ImagesCard;