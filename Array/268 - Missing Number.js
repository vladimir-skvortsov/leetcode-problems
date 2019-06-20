const missingNumber = numbers => {
  if (!numbers.length) return

  let max = numbers[0]
  let sum = 0
  let containZero = false

  numbers.forEach(num => {
    sum += num
    num > max ? (max = num) : null
    num === 0 ? (containZero = true) : null
  });

  if (!containZero) return 0

  const result = max * (max + 1) / 2 - sum

  if (!result) return max + 1
  else return result
}