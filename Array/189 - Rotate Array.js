const rotate = (array, k) => {
  for (var index = 0; index < k; index += 1)
    array.unshift(array.pop())
}