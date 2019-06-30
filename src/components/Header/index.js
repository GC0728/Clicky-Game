import React from "react";

function Header(props) {
    return (
        <div className="jumbotron">
            <span>
                <h1>
                    Clicky Game
                </h1>
                <p>
                    <i>Click each smash character only once! If you click a character twice, then your score resets.
                    </i>
                </p>
                <h2>
                    Score: {props.score} 
                </h2>
                <h2>
                    Best Score: {props.bestScore}
                </h2>
            </span>
        </div>
    )
};

export default Header;