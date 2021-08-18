import React from 'react';
import styled from 'styled-components';


const Icon = styled.svg`
  width: 44px;
  margin: 16px;
`;

export default function ClockIcon(props: { color: string }) {
  return <Icon
    version="1.1"
    enable-background="new 0 0 50 50"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="25"
      cy="25"
      fill="none"
      r="24"
      stroke={props.color}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="3"
    />
    <polyline
      fill="none"
      points="17,33 25,25 25,6   "
      stroke={props.color}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="2"
    />
  </Icon>;
}
