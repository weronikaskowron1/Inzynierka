export const calculateDistance = (userLon, userLat, sLon, sLat) => {
  const R = 6371; // promień Ziemi w km

  const dLat = ((sLat - userLat) * Math.PI) / 180;
  const dLon = ((sLon - userLon) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((userLat * Math.PI) / 180) *
      Math.cos((sLat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c).toFixed(1);
};
