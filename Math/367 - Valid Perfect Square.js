const isPerfectSquare = number => {
  const sqrt = number ** .5
  return sqrt === (~~sqrt)
}