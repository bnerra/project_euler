// Find the sum of all the multiples of 3 or 5 below 1000

var num = 1000

function totalAll(){
  var sum = 0
  for (var i = 0; i < num; i++){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}

totalAll()

console.log('The sum of all the multiples of 3 or 5 below ' + num + ' is ' + totalAll() + '.')
