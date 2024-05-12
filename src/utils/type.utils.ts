import { SafeAny } from '~/types/common.types.ts';

const checkStringOrNumber = (value: SafeAny): boolean => {
  return ['string', 'number'].includes(typeof value);
};

export const typeUtils = {
  checkStringOrNumber,
};
