const twoSum = (numbers, target) => {
  const result = []

  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (index1 === index2) continue
      if (numbers[index1] + numbers[index2] === target) {
        result.push(index1)
        result.push(index2)
        return result.sort((a, b) => a - b)
      }
    }
  }

  return
}