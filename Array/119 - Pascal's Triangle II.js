const getRow = rowIndex => {
  let row = [1]

  for (let index = 0; index < rowIndex; index += 1) {
    const nextRow = [1]

    row.reduce((previous, current) => {
      nextRow.push(previous + current)
      return current
    })
    nextRow.push(1)

    row = nextRow
  }

  return row
}