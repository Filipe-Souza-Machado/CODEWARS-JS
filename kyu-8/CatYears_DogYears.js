var calcular_Idade_Pets = function(humanYears, multiplicador) {
  return humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * multiplicador;
}

var humanYearsCatYearsDogYears = function(humanYears) {
  let ages = [humanYears];
  ages[1] = calcular_Idade_Pets(humanYears, 4);
  ages[2] = calcular_Idade_Pets(humanYears, 5);
  return ages;
}
var PetIdades = humanYearsCatYearsDogYears;

for (i = 0; i <= 10; i++){
  console.log(PetIdades(i));
}