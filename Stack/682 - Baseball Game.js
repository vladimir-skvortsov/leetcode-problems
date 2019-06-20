const calPoints = ops => {
  const stack = []
  let sum = 0

  ops.forEach(prop => {
    let a, b

    switch (prop) {
      case '+':
        a = stack[stack.length - 1]
        b = stack[stack.length - 2]
        stack.push(a + b)
        sum += (a + b)
        break
      case 'D':
        a = stack[stack.length - 1]
        b = a * 2
        stack.push(b)
        sum += b
        break
      case 'C':
        a = stack.pop()
        sum -= a
        break
      default:
        a = parseInt(prop)
        stack.push(a)
        sum += a
    }
  })

  return sum
}