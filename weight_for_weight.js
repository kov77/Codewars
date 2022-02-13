function sumDigits(s) {
  return s.split('').reduce(function (a, b) {
    return a + parseInt(b);
  }, 0);
}

function orderWeight(string_of_weights) {
  return string_of_weights
    .split(' ')
    .sort(function (a, b) {
      return sumDigits(a) - sumDigits(b) || a.localeCompare(b);
    })
    .join(' ');
}
