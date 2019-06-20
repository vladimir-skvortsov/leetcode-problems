const findTheDifference = (s, t) => {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')

  for (let index = 0; index < t.length; index += 1) {
    if (t[index] !== s[index]) return t[index]
  }
}