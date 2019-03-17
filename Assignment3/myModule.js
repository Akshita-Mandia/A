//function expression
/*var counter = function(arr)
{
  console.log('Length of the array is',arr.length);
}
//counter(['a','b','c']);
module.exports=counter;
*/
var counter = function(arr)
{
  return 'Length of the array is'+arr.length;
}
var multiplication = function(a, b){
  return `The product of number is ${a*b}`
}
var add = function(a, b){
  return `The add of number is ${a+b}`
}
var divide = function(a, b){
  return `The divide of number is ${b/a}`
}
var subtraction = function(a, b){
  return `The subtraction of number is ${b-a}`
}
//counter(['a','b','c']);
var constant = 10;
module.exports.counter=counter;
module.exports.multiplication=multiplication;
module.exports.add=add;
module.exports.divide=divide;
module.exports.subtraction=subtraction;
module.exports.constant=constant;
