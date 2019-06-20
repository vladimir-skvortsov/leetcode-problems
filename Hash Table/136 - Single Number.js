const singleNumber = numbers => {
  let result = 0

  for (var index = 0; index < numbers.length; index += 1) {
    result ^= numbers[index]
  }

  return result
}