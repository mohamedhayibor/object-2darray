'use strict';
function objectTo2dArray (obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

function pairsToObject(pairs) {
  const result = {};
  pairs.forEach( (array) => {
      result[array[0]] = array[1];
  });
  return result;
}

module.exports = function (arg) {
  if (Array.isArray(arg)) {
    return pairsToObject(arg);
  } else {
    return objectTo2dArray(arg);
  }
}
