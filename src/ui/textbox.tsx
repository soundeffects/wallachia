import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import {
  getCurrentMessage,
  getCurrentChoices,
  leadToDialogue
} from '../state/dialogues';


const Message = styled.p`
  color: white;
  font-size: 1.2em;
  opacity: 0.8;
  padding: 0.8em;
  margin: 0.3em;
  line-height: 1.4em;
`;

function disappearAnimation() {
  return function(animation: { state: string }) {
    if (animation.state !== "exited")
      return "opacity: 0;";
  }
}
const MessageBox = styled.section`
  position: absolute;
  top: 20vh;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 45rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4em;
  transition: opacity 1s linear;
  ${ disappearAnimation() }
`;

function buttonDisappearAnimation() {
  return function(animation: { state: string }) {
    if (animation.state === "exited")
      return "cursor: pointer; opacity: 0.6;";
  }
}

const Choice = styled.button`
  font: inherit;
  color: white;
  background: #221c15;
  border: none;
  border-radius: 0.6em;
  padding: 0.8em;
  opacity: 0.2;
  font-size: 1.2em;
  margin: 0.4em 1.8em;
  transition: opacity 0.2s linear;
  text-align: center;
  &:hover {
    ${ buttonDisappearAnimation() }
  }
`;

export default function Textbox() {
  const [animate, setAnimate] = useState(false);

  const choiceHandler = useCallback(choice => {
    setAnimate(true);
    setTimeout(() => {
      leadToDialogue(choice);
      setAnimate(false);
    }, 1000);
  }, []);

  return <Transition in={animate} timeout={1000}>
    { (state: string) =>
      <MessageBox state={state}>
        <Message>{ getCurrentMessage() }</Message>
        { 
          getCurrentChoices().map((choice, index) => 
            <Choice
              key={index}
              state={state}
              onClick={choiceHandler.bind(null, choice)}>
              { choice.reaction }
            </Choice>
          )
        }
      </MessageBox>
    }
  </Transition>;
}
