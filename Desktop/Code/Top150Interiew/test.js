const cars = new Array('volve', 'vw','porsche')

console.log(cars)

cars[1] = 'toyota'
cars[3] = 'honda'

console.log(cars)

cars.pop('vw')
console.log(cars)

console.log(cars)

const teams = new Array('dodgers','lakers','angels')
const names = new Array('ben','glen', 'george')

const combine = cars.concat(teams)
console.log(combine)
const combineAdd = combine.concat(names)
console.log(combineAdd)

