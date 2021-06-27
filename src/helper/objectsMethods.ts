import { planetWithResidents, planets } from '../types/types';

const getObjectWithoutTheKey = (
  object: planetWithResidents,
  key: keyof planetWithResidents
) => {
  const spreadObject = {...object};
  delete spreadObject[key];
  return spreadObject;
};

export default getObjectWithoutTheKey;
