import { atom } from 'recoil';

export const placeOrder = atom({
  key: 'placeOrder',
  default: null, // Default state could be null or an empty object
});
