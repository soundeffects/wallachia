import React from 'react';
import styled from 'styled-components';

import ClockIcon from './icons/clock';
import WalletIcon from './icons/wallet';
import DoorIcon from './icons/door';
import MoonIcon from './icons/moon';

import antanasia from '../assets/characters/antanasia_cautious.webp';


const Wrapper = styled.section`
  position: absolute;
  right: 5em;
  bottom: 0;
  top: 20vh;
  left: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  width: 14em;
  border-radius: 0.4em;
`;

const ControlBox = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
`;

const Control = styled.button`
  background: #221c15;
  border: none;
  border-radius: 4em;
  opacity: 0.2;
  margin: 0.2em;
  transition: opacity 0.2s linear;
  &:hover {
    cursor: pointer;
    opacity: 0.8
  }
`;

export default function CharacterControls() {
  return <Wrapper>
    <Picture src={antanasia} />
    <ControlBox>
      <Control><WalletIcon color="#ffffff" /></Control>
      <Control><ClockIcon color="#ffffff" /></Control>
      <Control><DoorIcon color="#ffffff" /></Control>
      <Control><MoonIcon color="#ffffff" /></Control>
    </ControlBox>
  </Wrapper>;
}
