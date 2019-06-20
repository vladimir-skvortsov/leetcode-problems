const numJewelsInStones = (j, s) => {
  let result = 0

  for (var index = 0; index < s.length; index += 1) {
    if (j.includes(s[index])) result += 1
  }

  return result
}