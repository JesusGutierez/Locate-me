import React, { Component } from 'react'

class Title extends Component {

    render() {
        const style = {
            fontSize: "4rem",
            margin: "1em",
            fontWeight: "800",
            color: "white",
            textShadow: "3px 3px 0 black"
        }

        return (
            <h1 style={style}>Locate me here 👀</h1>
        );
    }
}

export default Title;