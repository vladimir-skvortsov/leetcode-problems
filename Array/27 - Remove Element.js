const removeElement = (mass, val) => {
  for (var index = 0; index < mass.length; index++) {
    if (mass[index] === val) mass.splice(index--, 1)
  }
}