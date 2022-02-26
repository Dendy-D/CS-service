export const getDataFromFakeDB = (obj: any) => {
  const result = [];

  for (const key in obj) {
    if (!Array.isArray(obj[key])) {
      result.push(obj[key]);
    } else {
      for (const entity of obj[key]) {
        result.push(entity);
      }
    }
  }

  return result;
};
