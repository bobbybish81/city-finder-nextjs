interface ICities {
  name: string,
  position: {
    lat: number,
    lng: number,
  }
}

export interface ICoordinates {
  cities: ICities[];
}

export default ICoordinates;