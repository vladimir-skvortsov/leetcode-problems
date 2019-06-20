const isNumber = string =>
  !!string.trim() && !isNaN(Number(string))

const isNumber2 = string =>
  /^\s*[+-]?(\d+\.?|\d+(\.(\d*e?[+-]?)?\d+)?|\.(\d+e[+-]?)?\d+|\d+e[+-]?\d+)\s*$/i.test(string)