const lengthOfLastWord = string => {
  const splitedString = string.match(/\w+/g)
  return splitedString ? splitedString.pop().length : 0
}