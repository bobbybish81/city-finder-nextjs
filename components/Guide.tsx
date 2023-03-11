import React, { useContext } from 'react';
import { AppContext } from '../pages/_app';

const Guide = () => {

  const { state } = useContext(AppContext);

  const guideStyles = {
    height: state.displayGuide ? 'fit-content' : '0rem',
    width: '80%',
    margin: '0 auto 2rem',
    zIndex: '0',
    overflow: 'hidden',
    fontSize: '1.2rem'
  }

  return (
    <section
      className='d-flex flex-column'
      style={guideStyles}>
      <p className='mb-3'>
        <b>1. </b>You will see a map of Europe without Streets or Cities (Only Country X borders). The objective is to find the correct location of the city provided at the top of the page.</p>
      <p className='mb-3'>
        <b>2. </b>You begin with a total of 1500 kilometers. With each round, the difference in kilometers between the location of the city and your guess will be deducted from your total if the distance is over 50km.
      </p>
      <p className='mb-3'>
        <b>3. </b>When the city name appears at the top of the page, scroll through the map and click where you believe the location of the city to be.</p>
      <p className='mb-3'>
        <b>4. </b>After making you guess, the game will display the correct location of the city with a blue marker and the difference in kilometers between your guess and the correct location.</p>
      <p className='mb-3'>
        <b>5. </b>If your guess is within 50km of the correct location, one point will be added to your score and no kilometers will be deducted from the total.
      </p>
      <p className='mb-3'>
        <b>6. </b>The game ends once no kilometers are remaining or you have made it to the 10th round. Your final score is the number of cities you have found.
      </p>
    </section>
  )
}

export default Guide