interface IMarkers {
  lat: number | null;
  lng: number | null;
}

export interface IState {
  started: boolean;
  playing: boolean;
  index: number;
  citiesFound: number;
  kilometers: number;
  displayGuide: boolean;
  location: IMarkers,
  guessLocation: IMarkers,
  showResults: boolean,
}

export default IState;