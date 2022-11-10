const empty = function (v: any) {
  let result = false;
  if (v == null) {
    result = true;
  } else if (typeof v === 'string') {
    result = v === '';
  } else if (typeof v === 'object') {
    if (Array.isArray(v)) {
      result = v.length === 0;
    } else if (!(v instanceof Date)) {
      result = Object.entries(v).length === 0;
    }
  }
  return result;
};

const notEmpty = function (v: any) {
  return !empty(v);
};

const isSame = (v1: any, v2: any): boolean => {
  if (v1 === v2) return true;
  if (typeof v1 !== typeof v2) return false;
  if (v1 == null || v2 == null) return false;
  if (Array.isArray(v1) && Array.isArray(v2)) {
    if (v1.length !== v2.length) return false;
    for (let i = 0; i < v1.length; i += 1) {
      if (v1[i] !== v2[i]) return false;
    }
  } else {
    return v1 === v2;
  }
  return true;
};

export { empty, notEmpty, isSame };
