function isNull(data) {
  if (data == null || data == undefined || data == '') {
    return false;
  } else {
    return true;
  }
}

function isNum(data) {
  const isNumRegex = /^[0-9]*$/;
  if (!isNumRegex.test(data)) {
    return false;
  } else {
    return true;
  }
}

function isPrice(data) {
  if (data < 1000 || data > 5000000) {
    return false;
  } else {
    return true;
  }
}

function isLength(data, length) {
  if (data.length > length) {
    return false;
  } else {
    return true;
  }
}

function isStock(data) {
  if (data < 10 || data > 5000) {
    return false;
  } else {
    return true;
  }
}

function isCompare(data, data2) {
  if (data == data2) return true;
  else return false;
}

export default {
  isNull,
  isNum,
  isPrice,
  isLength,
  isStock,
  isCompare,
};
