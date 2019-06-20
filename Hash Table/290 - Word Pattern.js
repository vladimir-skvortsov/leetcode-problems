const wordInDictionary = (dictionary, word) =>
  Object.values(dictionary).some(dictionaryWord => dictionaryWord === word)

const wordPattern = (pattern, string) => {
  const splitedPattern = pattern.split('')
  const splitedString = string.split(' ')
  const dictionary = {}
  let isSame = true

  if (splitedPattern.length !== splitedString.length) return false

  splitedPattern.forEach((symbol, i) => {
    const samePositionWord = splitedString[i]

    if (!dictionary[symbol] && !wordInDictionary(dictionary, samePositionWord)) {
      dictionary[symbol] = samePositionWord
    }

    if (samePositionWord !== dictionary[symbol]) isSame = false
  })

  return isSame
}