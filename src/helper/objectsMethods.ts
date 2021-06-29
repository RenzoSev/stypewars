import { planetWithResidents, planets } from '../types/types';
type getObjectWithoutTheKeyTypes = (
  object: planetWithResidents | planets,
  key: string,
) => planets;

const getObjectWithoutTheKey: getObjectWithoutTheKeyTypes = (object, key) => {
  const spreadObject = { ...object };
  delete spreadObject[key as keyof typeof spreadObject];
  return spreadObject;
};

export default getObjectWithoutTheKey;
