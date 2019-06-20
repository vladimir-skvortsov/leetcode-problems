const isPalindrome = number => {
  if (number < 0) return false

  let numberCopy = number
  let reversedNumber = 0

  for (; numberCopy; numberCopy = Math.floor(numberCopy / 10)) {
    reversedNumber *= 10
    reversedNumber += numberCopy % 10
  }

  return number === reversedNumber
}