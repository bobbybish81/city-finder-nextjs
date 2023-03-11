import IState from "../interfaces/IState";

const reviewKm = (state:IState) => {

  let performance = '';

  if (state.citiesFound === 0) {
    performance = `You located ${state.citiesFound} cities. Pathetic!`}
  else if (state.citiesFound === 1) {
    performance = `You only found ${state.citiesFound} city. Very disappointing!`}
  else if (state.citiesFound === 2) {
    performance = `You only found ${state.citiesFound} cities. What a shame!`}
  else if (state.citiesFound <= 4) {
    performance = `You only found ${state.citiesFound} cities. Better luck next time!`}
  else if (state.citiesFound <= 6) {
    performance = `You located ${state.citiesFound} cities. Not bad but could be better!`}
  else if (state.citiesFound <= 8) {
    performance = `You located ${state.citiesFound} cities. Good job!`}
  else performance = `You located ${state.citiesFound} cities. Mic drop.... BOOM!`;

  return performance;
};

export default reviewKm;