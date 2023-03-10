import React, { useContext, useState } from 'react';
import { AppContext } from '../pages/_app';
import { useRouter } from 'next/router';

const HomeButton = () => {

  const { state, setState } = useContext(AppContext); 
  const router = useRouter();

  return (
    <div className='d-flex flex-column justify-content-center align-items-center my-4 mx-auto'>
      <button
        onClick={() => {
          setState({
            ...state,
            started: false,
            playing: false,
            index: 0,
            citiesFound: 0,
            kilometers: 1500,
            displayGuide: false,
            location: { lat: null, lng: null },
            guessLocation: { lat: null, lng: null },
            showResults: false,
          });
          router.push('/')
        }}>Return to Home Page</button>
  </div>
  )
}

export default HomeButton