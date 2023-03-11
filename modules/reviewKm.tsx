import IState from "../interfaces/IState";

const reviewKm = (state:IState) => {

  let performance = '';

  if (state.kilometers <= 0) {
    performance = `You dropped ${state.kilometers} kilometers below zero...... back to school for you!`}
  else if (state.kilometers <= 250) {
    performance = `You have ${state.kilometers} kilometers remaining......  maybe have a look at a globe once in a while!`}
  else if (state.kilometers <= 500) {
    performance = `You have ${state.kilometers} kilometers remaining......  start watching some travel shows like "Location, Location, Location!"`}
  else if (state.kilometers <= 750) {
    performance = `You have ${state.kilometers} kilometers remaining......  not terrible but a travel agency would laugh you out the office!`}
  else if (state.kilometers <= 1000) {
    performance = `You have ${state.kilometers} kilometers remaining......  not bad but don't volunteer for too many navigation duties any time soon!`}
  else if (state.kilometers <= 1250) {
    performance = `You have ${state.kilometers} kilometers remaining......  Geography is strong with this one!`}
  else performance = `You have ${state.kilometers} kilometers remaining......  impressive! You certainly know your cities!`;

  return performance;
};

export default reviewKm;