import {
  sample, now, lowerCase, range, shuffle, take, join,
} from 'lodash';
import names from './data/names.json';
import lastNames from './data/last-names.json';
import domains from './data/domains.json';
import letters from './data/letters.json';
import numbers from './data/numbers.json';
import symbols from './data/symbols.json';

export const getRandomName = () => `${sample(names)} ${sample(lastNames)}`;
export const getRandomEmail = () => {
  const name = lowerCase(getRandomName().split(' ')[0]);
  const timestamp = now();
  const domain = sample(domains);

  return `${name}${timestamp}@${domain}`;
};
export const getRandomPassword = () => {
  const length = sample(range(6, 15));
  const characters = [...letters, ...numbers, ...symbols];
  return join(take(shuffle(characters), length), '');
};
