import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            position: {
                display: "inline-flex",
                margin: "1em 0",
                alignItems: "center"
            },
            image: {
                margin: "0 1em",
                width: "2em",
            },
            link: {
                textDecoration: "none"
            }
        }
        return (
            <div style={style.position}>
                <img style={style.image} src={process.env.PUBLIC_URL + '/img/github.svg'} alt="#"/>
                <a style={style.link} href="https://github.com/JesusGutierez">JesusGutierez</a>
            </div>
        );
    }
}

export default Footer;