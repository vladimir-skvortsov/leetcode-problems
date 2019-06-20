const intersect = (
  firstRectangleCoord1,
  firstRectangleCoord2,
  secondRectangleCoord1,
  secondRectangleCoord2,
) =>
  Math.max(firstRectangleCoord1, secondRectangleCoord1)
  < Math.min(firstRectangleCoord2, secondRectangleCoord2)

const isRectangleOverlap = (firstRectangle, secondRectangle) =>
  intersect(
    firstRectangle[0],
    firstRectangle[2],
    secondRectangle[0],
    secondRectangle[2],
  )
  && intersect(
    firstRectangle[1],
    firstRectangle[3],
    secondRectangle[1],
    secondRectangle[3],
  )