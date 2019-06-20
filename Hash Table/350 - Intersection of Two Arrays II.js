const intersect = function intersect(array1, array2) {
  const array2Copy = [...array2]
  const resultArray = []

  array1.forEach(prop => {
    if (array2Copy.includes(prop)) {
      resultArray.push(prop)
      array2Copy.splice(array2Copy.indexOf(prop), 1)
    }
  })

  return resultArray
}