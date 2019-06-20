const isGoodNumebrs = number => {
  const splitedNum = String(number).split('')
  const goodNumbers = ['2', '5', '6', '9']
  const validNumbers = ['0', '1', '8', ...goodNumbers]
  return splitedNum.every(prop => validNumbers.includes(prop)) && splitedNum.some(prop => goodNumbers.includes(prop))
}

const rotatedDigits = number => {
  let goodNumbersCount = 0
  for (var index = 1; index <= number; index += 1) {
    if (isGoodNumebrs(index)) goodNumbersCount += 1
  }
  return goodNumbersCount
}