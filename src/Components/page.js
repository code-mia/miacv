import React from 'react';
import Deck from './deck.js';

function page(props) {
  return (
    <Deck parentCallback = {props.handleCallback}/>
  )
}

export default page