export default function orderByProps(obj, sortOrder) {
  const arrResult = [];
  const arraySort = Array.from(new Set(sortOrder.concat(Object.keys(obj).sort())));

  for (let i = 0; i < arraySort.length; i++) {
    for (const prop in obj) {
      if (arraySort[i] === prop) {
        arrResult.push({ key: prop, value: obj[prop] });
      }
    }
  }
  return arrResult;
}
