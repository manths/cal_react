import React, { Component } from 'react'

import Calbutton from './button';

export default class Index extends Component {
    constructor(){
        super();

        this.style={
            div:{
                display:'flex',
                flexDirection:'column',
                top:"20%",
                left:'40%',
                position:'absolute'
            }
        }
        
    }

    render() {
        return (
            <div style={this.style.div}>
                <Calbutton/>
            </div>
        )
    }
}
