import React, { Component } from 'react';

class Location extends Component {
    render() {

        const style = {
            position: {
                fontSize: "2em",
                textAlign: "center"
            },
            object_list: {
                listStyle: "none"
            }
        }

        return (
            <div style={style.position}>
                <p>Detailed location</p>
                <li style={style.object_list}>Country: Perú</li>
                <li style={style.object_list}>Region: Lima</li>
                <li style={style.object_list}>District: Ate</li>
                <li style={style.object_list}>Association: Los Viques</li>
                <li style={style.object_list}>Street: Los Llanos</li>
            </div>
        );
    }
}

export default Location;