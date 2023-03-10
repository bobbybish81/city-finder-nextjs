import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../pages/_app';
import 'bootstrap/dist/css/bootstrap.min.css';

const NextButton = () => {

  const { state, setState } = useContext(AppContext);
  const router =  useRouter();

  return (
    <section
      className='buttonSection'
      style={{ height: '4rem'}}>

      {!state.playing && !state.showResults ?
      <button
        onClick={() => setState({
          ...state,
          playing: true,
          index: state.index + 1,
          location: {
            lat: null,
            lng: null,
          },
          guessLocation: {
            lat: null,
            lng: null,
          },
        })
        }>Next City</button>
      : null}

      {state.showResults ? 
      <button
        onClick={() => {
          setState({
          ...state,
          started: false,
          });
          router.push('/results')}
        }>Go To Results</button>
      : null}

    </section>
  )
}

export default NextButton