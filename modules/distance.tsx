// lat1 and lon1 are the latitude and longitude of the first coordinate
// lat2 and lon2 are the latitude and longitude of the second coordinate.

export const distance = (lat1:number, lon1:number, lat2:number, lon2:number) => {
  const radius = 6371; // Earth's radius in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.asin(Math.sqrt(a));
  const distance = radius * c; // Distance in kilometers

  return Math.floor(distance);
}

function deg2rad(deg:number) {
  return deg * (Math.PI / 180);
}

export default distance;