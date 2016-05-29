/*contstructor patterns examples*/

/*basic constructor pattern*/
function Person(name,age){
  this.name=name;
  this.age=age;
}

var person1=new Person("buuug7",22);
console.log(person1.name); // buuug7


/*constructor pattern with prototype*/
function Person(name,age){
  this.name=name;
  this.age=age;
}

Person.prototype.toString=function(){
  return this.name+" "+this.age;
}

var person2=new Person("buuug8",23);
var person3=new Person("buuug9",24);

console.log(person2.toString()); // buuug8 23
console.log(person3.toString()); // buuug9 24
