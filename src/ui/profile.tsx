import React from 'react';
import styled from 'styled-components';

import antanasia from '../assets/characters/antanasia.webp';


const ControlBox = styled.section`
  position: absolute;
  right: 5em;
  bottom: 20vh;
`;

const Control = styled.button`

`;

const Picture = styled.img`
  height: 14em;
  width: 13em;
  border-radius: 0.4em;
  position: absolute;
  top: 20vh;
  right: 5em;
  bottom: 0;
  margin: auto;
`;

export default function Profile() {
  return [
    <Picture key="1" src={antanasia} />,
    <ControlBox>
      <Control>Balance</Control>
      <Control>Calendar</Control>
      <Control>Estate</Control>
      <Control>Sleep</Control>
    </ControlBox>
  ];
}
