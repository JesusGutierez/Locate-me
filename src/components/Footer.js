import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            position: {
                display: "inline-flex",
                margin: "1em 0"
            },
            image: {
                margin: "0 1em",
                width: "2em",
            }
        }
        return (
            <div style={style.position}>
                <img style={style.image} src={process.env.PUBLIC_URL + '/img/github.svg'} alt="#"/>
                <p>https://github.com/JesusGutierez</p>
            </div>
        );
    }
}

export default Footer;