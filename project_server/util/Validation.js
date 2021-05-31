function isNull(data) {
  if (data == null || data == undefined || data == '') {
    return false;
  } else {
    return true;
  }
}

export default {
  isNull,
};
