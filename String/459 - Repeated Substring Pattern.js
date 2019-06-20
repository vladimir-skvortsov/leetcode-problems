const repeatedSubstringPattern = string => {
  if (!string) return false

  return (string + string).slice(1, -1).includes(string)
}