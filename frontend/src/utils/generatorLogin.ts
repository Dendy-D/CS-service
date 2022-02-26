import CyrillicToTranslit from 'cyrillic-to-translit-js';

export const generatorLogin = (fullName: string) => {
  const cyrillicToTranslit = new CyrillicToTranslit();
  const arr = fullName.split(' ');
  if (arr.length > 1) {
    const preLogin = arr[1].toLowerCase() + ' ' + arr[0].toLowerCase();
    const result = cyrillicToTranslit.transform(preLogin, '_');
    return result;
  }

  return cyrillicToTranslit.transform(fullName);
};

console.log(generatorLogin('Василенко Даниил Павлович'));

