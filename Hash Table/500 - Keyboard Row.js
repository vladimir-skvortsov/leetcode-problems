const row1 = 'qwertyuiop[]{}'
const row2 = `asdfghjkl:;'"`
const row3 = 'zxcvbnm,<.>?/'

const findWords = words =>
  words.filter(word => {
    const wordMass = word.toLowerCase().split('')

    if (row1.includes(wordMass[0])) return wordMass.every(prop => row1.includes(prop))
    if (row2.includes(wordMass[0])) return wordMass.every(prop => row2.includes(prop))
    if (row3.includes(wordMass[0])) return wordMass.every(prop => row3.includes(prop))

    return false
  })