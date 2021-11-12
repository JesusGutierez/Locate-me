import React, { Component } from 'react';
import Map from './Map'
import Location from './Location'

class Information extends Component {
    render() {
        const style={
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '40% 60%'
        }
        return (
            <div style={style}>
                <Location/>
                <Map/>
            </div>
        );
    }
}

export default Information;