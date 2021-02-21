const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

// today is 2018-06-13
console.log(getAge('1990/06/14')) // 23
getAge('1994-06-13') // 24