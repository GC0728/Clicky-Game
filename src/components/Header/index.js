import React from "react";

function Header(props) {
    return (
        <div className="jumbotron">
            <span>
                <h2>
                    Clicky Game
                </h2>
                <h2>
                    [Message Goes Here]
                </h2>
                <h2>
                    Score: {props.score} 
                </h2>
                <h2>
                    Top Score: 1
                </h2>
            </span>
        </div>
    )
};

export default Header;