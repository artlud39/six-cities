import { AppRoute } from '../const';

export const getOfferUrl = (id: string | number): string => `${AppRoute.Offer.replace(':id', `${id}`)}`;
