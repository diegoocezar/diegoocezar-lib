import React from 'react';
import './styles.scss';

export default function Button({ text, onClick }) {
  return (
    <button className={'ds-button'} onClick={onClick}>
      {text}
    </button>
  );
}