// import React from 'react';
import { ReactTyped } from 'react-typed';

const TypingText= () => {
  return (
    <div className='header__typing'>
      <ReactTyped
        strings={['WELCOME TO CSS ANIMATIONS']}
        typeSpeed={80}
        backSpeed={60}
        loop
      />
    </div>
  );
};

export default TypingText;