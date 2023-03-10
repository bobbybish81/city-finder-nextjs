import React, { useContext } from 'react';
import HomeButton from '../components/HomeButton';
import reviewKm from '../modules/reviewKm';
import reviewScore from '../modules/reviewScore';
import cityCoordinates from '../coordinates/cityCoordinates';
import { AppContext } from './_app';

const Results = () => {

  const { state } = useContext(AppContext); 

  return (
    <>
      {state.showResults ?
      <main className='main d-flex flex-column justify-content-center align-items-center bg-dark'>
        <section className='results'>
          {state.index < cityCoordinates.cities.length -1 ?
          <>
            <h1 className='mt-5 mb-2 mx-auto font-weight-bold display-2'>GAME OVER</h1>
            <h3 className='mb-5 mx-auto'>You ran out of kilometers!</h3>
          </> :
          <>
            <h1 className='my-1 mx-auto font-weight-bold display-4'>WELL DONE!</h1>
            <h1 className='my-1 mx-auto font-weight-bold display-4'>YOU COMPLETED THE GAME!</h1>
          </>}
          <h1 className='my-3 mx-auto font-weight-bold display-4'>{`Final Score: ${state.citiesFound}`}</h1>
          <br/>
          <h2 className='mt-5 mb-4 mb-1 mx-auto font-weight-bold'>PERFORMANCE REVIEW</h2>
          <h3 className='mb-3 mx-auto font-italic'>{reviewScore(state)}</h3>
          <h3 className='mb-5 mx-auto font-italic'>{reviewKm(state)}</h3>
        </section>
        <HomeButton/>
      </main> :

      <main className='main d-flex flex-column justify-content-center align-items-center bg-dark'>
        <HomeButton/>
      </main>}
    </>
  )
}

export default Results
