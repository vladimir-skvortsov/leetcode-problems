const findComplement = number =>
  parseInt(number.toString(2).replace(/./g, number => String(Number(number) ^ 1)), 2)