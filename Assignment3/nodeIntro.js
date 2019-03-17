// console.log('Hey ! this is my first node app');
/*setTimeout(function(){
  console.log('this is fired after 2 seconds');
}, 2000);
*/
/*setInterval(function(){
  console.log('every 2 seconds');
}, 2000);
*/
/*var time = 0;
var timer=setInterval(function(){
  time=time+2;
  console.log(time+ ' has crossed');
  if(time>7){
    clearInterval(timer);
  }
},2000)
*/
//these were the global objects.............
/*console.log(__dirname);
console.log(__filename);
*/
//normal function
/*function myfunction(){
  console.log("inside my func");
}*/
//function expression
//es 6 way
//var func = () => {}
/*var func=function()
{
  console.log('My function expression');
}
func();
*/

/*var func = () => {}

{
  console.log('My function expression called from a function');
}
//
function fun(func) {
  func();
}
fun(func);
*/
//WE USING MODULE HERE//
/*
var myModule = require('./myModule');
console.log(myModule.counter(['a','b','c']));
console.log(myModule.multiplication(3,5));
console.log(myModule.add(3,5));
console.log(myModule.divide(3,12));
console.log(myModule.subtraction(3,5));
console.log(myModule.multiplication(myModule.constant,10));
*/
var fs= require('fs');
//fs.unlinkSync('./writeMe.txt')       ..............for delete the file(sync)
//fs.unlink('./writeMe.txt',(err) =>{ .....................for deleting async file
//if (err) throw err
//});
/*fs.readFile('myReading.txt','utf8', function(error,data)
{
fs.writeFile('writeMe.txt',data,()=>{
})
//  console.log(data);
});     //Async
//var  readMe=fs.readFileSync('myReading.txt','utf8');  //it is a synchronous function
//fs.writeFileSync('writeMe.txt',readMe);
console.log('Async at work!!');
*/
//////////////////new directory
fs.mkdir('myDirectory',()=>{
  fs.readFile('./myReading.txt','utf8', function(error, data){
    fs.writeFile('./myDirectory/writeMe.txt', data,(err)=>{
      if (err) throw err;
    })
  })
});
fs.unlink('./writeMe.txt',(err) =>{ 
if (err) throw err
});
///removal of directory.............
//fs.rmdir('myDirectory',()=>{});
