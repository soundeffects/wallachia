import React from 'react';
import styled from 'styled-components';

import CharacterControls from './characterControls';
import Textbox from './textbox';

import mansion from '../assets/scenes/mansion_entrance.webp';


const Background = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #151311;
`;

const Panorama = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80vh;
  background: black url(${mansion}) center center no-repeat;
  background-size: cover;
`;

const Divider = styled.hr`
  position: absolute;
  bottom: 80vh;
  left: 2em;
  right: 2em;
  height: 70px;
  border-style: solid;
  border-color: #6f5f40;
  border-width: 2px 0 0 0;
  border-radius: 30px;
  margin-bottom: -70px;
  &:before {
    display: block;
    content: "";
    height: 70px;
    margin-top: -75px;
    border-style: solid;
    border-color: #6f5f40;
    border-width: 0 0 2px 0;
    border-radius: 30px;
  }
`;

const Location = styled.h2`
  position: absolute;
  bottom: 80vh;
  left: 3em;
  color: #dddddd;
  opacity: 0.5;
  font-size: 1.4em;
  text-shadow: 3px 4px 10px rgba(0, 0, 0, 0.9);
  margin-bottom: 1em;
`;

export default function Scene() {
  return <Background>
    <Panorama />
    <Divider />
    <Location>At The Manor Entrance</Location>

    <Textbox />
    <CharacterControls />
  </Background>;
}
