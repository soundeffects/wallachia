import React from 'react';
import styled from 'styled-components';


const Icon = styled.svg`
  width: 64px;
  margin: 0 2px;
`;

export default function ClockIcon(props: { color: string }) {
  return <Icon
    version="1.1"
    enable-background="new 0 0 200 200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M146.28,45.07   c-10.53-6.88-23.11-10.87-36.62-10.87c-37.09,0-67.15,30.07-67.15,67.149c0,37.09,30.061,67.15,67.15,67.15   c23.12,0,43.51-11.68,55.58-29.471"
      fill="none"
      stroke={props.color}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="6"
    />
    <path
      d="M146.28,45.07   c-21.8,4.49-38.19,23.79-38.19,46.93c0,26.471,21.46,47.92,47.92,47.92c3.16,0,6.24-0.311,9.23-0.891"
      fill="none"
      stroke={props.color}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="6"
    />
  </Icon>;
}
