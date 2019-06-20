const nextGreatestLetter = (lettersArray, target) => {
  let result

  for (var index = 0; index < lettersArray.length; index += 1) {
    if (lettersArray[index] > target) {
      result = lettersArray[index]
      break
    }
  }

  if (!result) result = lettersArray[0]

  return result
}