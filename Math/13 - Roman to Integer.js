const romanDictionary = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
}

const romanToInteger = romanNumber => {
  const lowerCaseRomanNumber = romanNumber.toLowerCase()
  let result = 0
  let lastInteger = 0

  for (let index = 0; index < lowerCaseRomanNumber.length; index += 1) {
    const integer = romanDictionary[lowerCaseRomanNumber[index]]

    if (integer <= lastInteger) result += integer
    else result += integer - 2 * lastInteger

    lastInteger = integer
  }

  return result
}