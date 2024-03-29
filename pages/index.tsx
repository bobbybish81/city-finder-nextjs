import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Guide from '../components/Guide';
import ArrowIcon from '../components/ArrowIcon';
import StartButton from '../components/StartButton';

export default function Home() {

  return (
    <>
      <Head>
        <title>City Finder</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main d-flex flex-column justify-content-center align-items-center bg-dark'>
        <h1 className='mb-4 text-center'>WELCOME TO CITY FINDER!</h1>
        <h4 className='mb-4 text-center'>YOUR MISSION: Find the location of the city on the map to within 50km.</h4>
        <section>
          <div className='my-2 mx-auto text-center'>
            <h5>HOW TO PLAY</h5>
            <ArrowIcon/>
          </div>
          <Guide/>
          <StartButton/>
        </section>
        <section className='d-flex justify-content-center align-items-center position-relative'>
          <Image
            src={require('../public/earth.webp')}
            width={500}
            height={500}
            alt='earth image to appear'
            priority/>
          <Image
            style={{position: 'absolute', top: '4rem', left: '14rem'}}
            src={require('../public/guess-pin.svg')}
            width={30}
            height={30}
            alt={'guess pin'}
            priority/>
          <Image
            style={{position: 'absolute', top: '5rem', left: '12rem'}}
            src={require('../public/location-pin.svg')}
            width={30}
            height={30}
            alt={'location pin'}
            priority/>
        </section>
      </main>
    </>
  )
}
