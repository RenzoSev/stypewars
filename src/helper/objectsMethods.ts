import { planetWithResidents, planets } from '../types/types';
type getObjectWithoutTheKeyTypes = (
  object: planetWithResidents,
  key: keyof planetWithResidents
) => planets;

const getObjectWithoutTheKey: getObjectWithoutTheKeyTypes = (object, key) => {
  const spreadObject = { ...object };
  delete spreadObject[key];
  return spreadObject;
};

export default getObjectWithoutTheKey;
