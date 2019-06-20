const removeDuplicates = nums => {
  let count = 0

  for (let index = 1; index < nums.length; index += 1) {
    if (nums[index] !== nums[count]) {
      count++
      nums[count] = nums[index]
    }
  }

  return count + 1
}