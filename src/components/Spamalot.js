import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render() {
        const arr = []
        for(let i = 0 ; i < 500 ; i ++)
            arr.push(<Spam />)

        return (
            arr
        )
    }
}

export default Spamalot

