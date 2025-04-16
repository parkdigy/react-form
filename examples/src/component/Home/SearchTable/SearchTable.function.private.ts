import { Dict } from '@pdg/util';

export const deHash = () => {
  const values: Dict<string> = {};
  const hash = window.location.hash.substring(1);
  hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
    values[decodeURIComponent(key)] = decodeURIComponent(value);
    return substring;
  });
  return values;
};
