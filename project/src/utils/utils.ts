export const getAdaptiveRating = (ratingOffer : number): string => {
  const roundedRating = Math.round(ratingOffer);
  switch(roundedRating) {
    case 1:
      return '20%';
      break;
    case 2:
      return '40%';
      break;
    case 3:
      return '60%';
      break;
    case 4:
      return '80%';
      break;
    case 5:
      return '100%';
      break;
    default:
      return '0%';
  }
};
