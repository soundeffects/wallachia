import React, { Component } from 'react';
import Profile from './profile';
import mansion from '../mansion.webp';


export default class Scene extends Component{
  render() {
    const mainStyling = {
      margin: '0',
      padding: '0',
      position: 'absolute',
      top: '50vh',
      bottom: '0',
      right: '0',
      left: '0',
      backgroundColor: '#121208'
    };

    const divStyling = {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '50vh',
      background: `black url(${mansion}) center center no-repeat`,
      backgroundSize: 'cover'
    };

    return [
      <main style={mainStyling} />,
      <div style={divStyling} />,
      <Profile />
    ];
  }
}
