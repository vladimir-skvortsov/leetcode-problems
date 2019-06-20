const hammingDistance = (x, y) => {
  let differencesCount = 0

  for (let i = x ^ y; i > 0; i >>= 1) {
    differencesCount += i & 1
  }

  return differencesCount
}