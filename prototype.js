function Person(fName,lName){
    this.firstName=fName
    this.lastName=lName
}

function SuperHero(fName,lName){
    Person.call(this,fName,lName)
    this.isSuperHero=true
}

SuperHero.prototype.fightCrime=function(){
    console.log('Fighting Crime')
}

// const batman = new SuperHero();
// batman.getFullName();



const p1=new Person('Bruce','Wayne')
const p2=new Person('Clark','White')

// p1.getFullName= function(){
//     return this.firstName + ' '+this.lastName
// }

Person.prototype.getFullName= function(){
    return this.firstName + ' '+this.lastName
}

console.log(p1.getFullName())
console.log(p2.getFullName())

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero('giridhar', 'katasani');
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());
