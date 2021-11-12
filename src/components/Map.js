import React, { Component } from 'react';

class Map extends Component {

    render() {

        const style = {
            map: {
                borderRadius: "10px",
                width: "90%",
                height: "24em",
                loading: "lazy"
            },
            paragraph: {
                fontSize: "2em",
            }
        }

        return (
            <div>
                <p style={style.paragraph}>You can locate me here 👀</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1009720046013!2d-76.92862588543802!3d-12.036569244987477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6a9ca134179%3A0x4c4a9a864663735a!2sLos%20Llanos%2C%20Ate%2015494!5e0!3m2!1ses-419!2spe!4v1636609991391!5m2!1ses-419!2spe" style={style.map} title="google-map"></iframe>
            </div>
        );
    }
}

export default Map;