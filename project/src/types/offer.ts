export type OfferType = {
  id: number,
  bedrooms: number,
  images: [string],
  isFavorite: boolean,
  isPremium: boolean,
  description: string,
  goods: [string],
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
};

export type OffersType = OfferType[];
