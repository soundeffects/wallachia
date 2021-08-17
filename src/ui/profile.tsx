import React, { Component } from 'react';
import styled from 'styled-components';

import antanasia from '../antanasia.webp';


export default class Profile extends Component {
  render() {
    const Profile = styled.img`
      height: 14em;
      width: 13em;
      border-radius: 1em;
      position: absolute;
      top: 20vh;
      right: 5em;
      bottom: 0;
      margin: auto;
    `;

    return <Profile src={antanasia} />;
  }
}
