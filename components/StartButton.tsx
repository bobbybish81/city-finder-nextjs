import React, { useContext, useState } from 'react';
import { AppContext } from '../pages/_app';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const StartButton = () => {

  const { state, setState } = useContext(AppContext);
  const router = useRouter();

  return (
    <section
      className='d-flex flex-column justify-content-center align-items-center my-4 mx-auto'>
      <button
        onClick={() => {
          setState({
          ...state,
          started: true,
          playing: true,
          });
          router.push('/city-finder')}
      }>Start Game</button>
    </section>
  )
}

export default StartButton