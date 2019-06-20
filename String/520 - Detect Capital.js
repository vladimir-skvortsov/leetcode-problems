const detectCapitalUse = string =>
  string === string.toLowerCase()
  || string === string.toUpperCase()
  || string === string[0].toUpperCase() + string.slice(1).toLowerCase()