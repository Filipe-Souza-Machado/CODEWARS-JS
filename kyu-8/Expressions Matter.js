function expressionMatter(a, b, c) {
  //Math.max: Serve para encontrar o valor máximo entre as diferentes expressões possíveis.
  return Math.max(
    a + b + c,
    a + b * c,
    a * b + c,
    a * b * c,
    a + (b + c),
    (a + b) * c,
    a * (b + c)
  );
}

console.log(expressionMatter(1, 2, 5));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(9, 1, 1));