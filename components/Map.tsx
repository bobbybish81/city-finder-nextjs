import React, { useContext } from 'react';
import { AppContext } from '../pages/_app';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import cityCoordinates from '../coordinates/cityCoordinates';
import distance from '../modules/distance';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import L from 'leaflet';
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';

interface MapProps {
  distanceDiff: number,
  setDistanceDiff: (number: number) => void,
}

const Map = ({ setDistanceDiff, distanceDiff } : MapProps) => {

  const {state, setState} = useContext(AppContext);

  const handleClick = (e: L.LeafletMouseEvent) => {
    if (!state.playing) {
      return
    }
    const distanceDiff = distance(
      e.latlng.lat,
      e.latlng.lng,
      cityCoordinates.cities[state.index].position.lat,
      cityCoordinates.cities[state.index].position.lng);

    setDistanceDiff(distanceDiff)
    setState({
      ...state,
      playing: false,
      kilometers: distanceDiff <= 50 ? state.kilometers : state.kilometers - distanceDiff,
      citiesFound: distanceDiff <= 50 ? state.citiesFound + 1 : state.citiesFound,
      location: {
        lat: cityCoordinates.cities[state.index].position.lat,
        lng: cityCoordinates.cities[state.index].position.lng,
      },
      guessLocation: {
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      },
    });
    if (state.kilometers - distanceDiff <= 0) {
      setState({
        ...state,
        playing: false,
        citiesFound: distanceDiff <= 50 ? state.citiesFound + 1 : state.citiesFound,
        kilometers: distanceDiff <= 50 ? state.kilometers : state.kilometers - distanceDiff,
        showResults: true,
      });
    }
    if (state.index === cityCoordinates.cities.length -1) {
      setState({
        ...state,
        showResults: true,
      });
    }
  };

// import the LeafletMouseEvent types from the leaflet library to handle the onclick event and log the coordinates of the clicked location.

const MapClickHandler = (props: { onClick: (e: L.LeafletMouseEvent) => void }) => {
    useMapEvents({
      click: props.onClick,
    });
    return null;
  }

  const myIcon = L.icon({
    iconUrl: 'https://example.com/path/to/icon.png',
    iconSize: [38, 38],
  });

  return (
    <section
      className='d-flex flex-column justify-content-center align-items-center'>
      <div className='answer'>
        {distanceDiff <= 50 && !state.playing ? <h3 className='text-success'>Location Found!</h3> : null}
        {distanceDiff > 50 && !state.playing ? <h3 className='answer text-warning'>Wrong Location!</h3> : null}
      </div>
      <MapContainer
        className='map'
        center={[50, 1]}
        zoomControl={false}
        scrollWheelZoom={false}
        zoom={5}>
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
          attribution='©Leaflet, ©CartoDB'/>
        {state.guessLocation.lat !== null && state.guessLocation.lng !== null && (
          <Marker
            position={[state.guessLocation.lat, state.guessLocation.lng]}
            icon={myIcon}>
          </Marker>
        )}
        {state.location.lat !== null && state.location.lng !== null && (
          <Marker
            position={[state.location.lat, state.location.lng]}
            icon={myIcon}>
          </Marker>
        )}
        <MapClickHandler onClick={handleClick} />
      </MapContainer>
    </section>
    );
}

export default Map