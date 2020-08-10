module.exports = function reverseData(obj) {
    var res = [];
    var resValue = null;
    var isValid = true;
    function recurse(obj) {
      if (
        !(typeof obj === 'object' || typeof obj === 'function') ||
        obj === null ||
        Array.isArray(obj)
      ) {
        isValid = false;
        return;
      }
      if (Object.keys(obj).length !== 1) {
        isValid = false;
        return;
      }
      for (const key in obj) {
        let value = obj[key];
        if (value != undefined) {
          res.push(key);
          if (value && typeof value === 'object') {
            recurse(value);
          } else {
            res.push(value);
          }
        }
      }
    }
    recurse(obj);
    if (!isValid) {
      return "";
    }
    res = res.reverse();
    resValue = res[res.length - 1];
    res.pop();
    return res.reduceRight((value, key) => ({ [key]: value }), resValue);
  }