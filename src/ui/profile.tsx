import React, { Component } from 'react';
import antanasia from '../antanasia.webp';


export default class Profile extends Component {
  render() {
    const styling = {
      height: '15em',
      width: '14em',
      borderRadius: "1em",
      position: "absolute",
      right: '5em',
      top: '50vh',
      marginTop: '-7.5em'
    };

    return <img style={styling} src={antanasia} />;
  }
}
