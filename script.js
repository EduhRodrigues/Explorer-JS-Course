const araras = [
  {
    specie: "Arara Canindé",
    averageHabitat01: 120,
    averageHabitat02: 98,
    averageHabitat03: 110
  },
  {
    specie: "Arara Azul Grande",
    averageHabitat01: 69,
    averageHabitat02: 57,
    averageHabitat03: 45
  },
  {
    specie: "Arara Azul de Lear",
    averageHabitat01: 24,
    averageHabitat02: 10,
    averageHabitat03: 7
  },
  {
    specie: "Arara Azul Pequena",
    averageHabitat01: 0,
    averageHabitat02: 0,
    averageHabitat03: 0
  },
]

let ararasSpecie = []
let ararasAverageHabitat01 = []
let ararasAverageHabitat02 = []
let ararasAverageHabitat03 = []

for (let arara of araras){
  ararasSpecie.push(arara.specie) //pega a chave e o valor do atributo 'specie' do objeto 'araras' salvo na variável 'arara' e coloca como valor da variável 'ararasSpecie', que foi criada como um objeto vazio. 
}
for (let arara of araras){
  ararasAverageHabitat01.push(arara.averageHabitat01)
}
for (let arara of araras){
  ararasAverageHabitat02.push(arara.averageHabitat02)
}
for (let arara of araras){
  ararasAverageHabitat03.push(arara.averageHabitat03)
}

let individualsTotal = ararasAverageHabitat01[0] + ararasAverageHabitat02[0] + ararasAverageHabitat03[0]
let average = individualsTotal / 3
let status
status ="";

if (average >= 70) {
status = ` ${ararasSpecie[0]}  has a LITTLE WORRYING of extintion`
}
else if (average < 70 && average >= 40) {
status = `Its VERY DIFFICULT to convert the ${ararasSpecie[0]} extinction process in the current conditions!`
} 
else if (average < 40 && average > 0) {
status = `Its IMPOSSIBLE to convert the ${ararasSpecie[0]} extinction process in the current conditions!`
} 
else if (average == 0 ) {
status = `${ararasSpecie[0]} HAS BEEN EXTINCT!`
}

alert (`Brazilian Araras Species Endangered Status
Specie: ${ararasSpecie[0]}
Habitat 01: Were found ${ararasAverageHabitat01[0]} individuals.
Habitat 02: Were found ${ararasAverageHabitat02[0]} individuals.
Habitat 03: Were found ${ararasAverageHabitat03[0]} individuals.
Total:                              ${individualsTotal} individuals
Average:                         ${average.toFixed(0)} individuals

Status: ${status}

>=  70 // has an little worrying of extintion
< 70 && >= 40 // very difficult to convert in current conditions
< 40 > 0 // impossible to convert in current conditions
= 0 // species extinct by destructive human actions

! Important: All these are hypothetical values!
! Measuring the danger of animal species extinction
is a controversial topic and has enumerations variables!
! Human actions can be constructive or destructive.
What are your actions?!

Please, press the OK button to continue...

`)

individualsTotal = ararasAverageHabitat01[1] + ararasAverageHabitat02[1] + ararasAverageHabitat03[1]
average = individualsTotal / 3

if (average >= 70) {
  status = ` ${ararasSpecie[1]}  has a LITTLE WORRYING of extintion`
  }
  else if (average < 70 && average >= 40) {
  status = `Its VERY DIFFICULT to convert the ${ararasSpecie[1]} extinction process in the current conditions!`
  } 
  else if (average < 40 && average > 0) {
  status = `Its IMPOSSIBLE to convert the ${ararasSpecie[1]} extinction process in the current conditions!`
  } 
  else if (average == 0 ) {
  status = `${ararasSpecie[1]} HAS BEEN EXTINCT!`
  }

alert (`Brazilian Araras Species Endangered Status
Specie: ${ararasSpecie[1]}
Habitat 01: Were found ${ararasAverageHabitat01[1]} individuals.
Habitat 02: Were found ${ararasAverageHabitat02[1]} individuals.
Habitat 03: Were found ${ararasAverageHabitat03[1]} individuals.
Total:                              ${individualsTotal} individuals
Average:                         ${average.toFixed(0)} individuals

Status: ${status}

>=  70 // little worrying of extintion
< 70 && >= 40 // very difficult to convert in current conditions
< 40 > 0 // impossible to convert in current conditions
= 0 // species extinct by destructive human actions

! Important: All these are hypothetical values!
! Measuring the danger of animal species extinction
is a controversial topic and has enumerations variables!
! Human actions can be constructive or destructive.
What are your actions?!

Please, press the OK button to continue...

`)

individualsTotal = ararasAverageHabitat01[2] + ararasAverageHabitat02[2] + ararasAverageHabitat03[2]
average = individualsTotal / 3
status=""

if (average >= 70) {
  status = ` ${ararasSpecie[2]} has a LITTLE WORRYING of extintion`
  }
  else if (average < 70 && average >= 40) {
  status = `Its VERY DIFFICULT to convert the ${ararasSpecie[2]} extinction process in the current conditions!`
  } 
  else if (average < 40 && average > 0) {
  status = `Its IMPOSSIBLE to convert the ${ararasSpecie[2]} extinction process in the current conditions!`
  } 
  else if (average == 0 ) {
  status = `${ararasSpecie[2]} HAS BEEN EXTINCT!`
  }

alert (`Brazilian Araras Species Endangered Status
Specie: ${ararasSpecie[2]}
Habitat 01: Were found ${ararasAverageHabitat01[2]} individuals.
Habitat 02: Were found ${ararasAverageHabitat02[2]} individuals.
Habitat 03: Were found ${ararasAverageHabitat03[2]} individuals.
Total:                              ${individualsTotal} individuals
Average:                         ${average.toFixed(0)} individuals

Status: ${status}

>=  70 // little worrying of extintion
< 70 && >= 40 // very difficult to convert in current conditions
< 40 > 0 // impossible to convert in current conditions
= 0 // species extinct by destructive human actions

! Important: All these are hypothetical values!
! Measuring the danger of animal species extinction
is a controversial topic and has enumerations variables!
! Human actions can be constructive or destructive.
What are your actions?!

Please, press the OK button to continue...

`)

individualsTotal = ararasAverageHabitat01[3] + ararasAverageHabitat02[3] + ararasAverageHabitat03[3]
average = individualsTotal / 3
status=""

if (average >= 70) {
  status = ` ${ararasSpecie[3]} has a LITTLE WORRYING of extintion`
  }
  else if (average < 70 && average >= 40) {
  status = `Its VERY DIFFICULT to convert the ${ararasSpecie[3]} extinction process in the current conditions!`
  } 
  else if (average < 40 && average > 0) {
  status = `Its IMPOSSIBLE to convert the ${ararasSpecie[3]} extinction process in the current conditions!`
  } 
  else if (average == 0 ) {
  status = `${ararasSpecie[3]} HAS BEEN EXTINCT!`
  }

alert (`Brazilian Araras Species Endangered Status
Specie: ${ararasSpecie[3]}
Habitat 01: Were found ${ararasAverageHabitat01[3]} individuals.
Habitat 02: Were found ${ararasAverageHabitat02[3]} individuals.
Habitat 03: Were found ${ararasAverageHabitat03[3]} individuals.
Total:                              ${individualsTotal} individuals
Average:                         ${average.toFixed(0)} individuals

Status: ${status}

>=  70 // little worrying of extintion
< 70 && >= 40 // very difficult to convert in current conditions
< 40 > 0 // impossible to convert in current conditions
= 0 // species extinct by destructive human actions

! Important: All these are hypothetical values!
! Measuring the danger of animal species extinction
is a controversial topic and has enumerations variables!
! Human actions can be constructive or destructive.
What are your actions?!

Saiba mais em: www.institutoararaazul.org.br

Thank you for your attention!

`)



