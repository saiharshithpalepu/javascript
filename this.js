//implicit binding
const person={
    name:'Harshith',
    sayMyName:function(){
         console.log(`my name is ${this.name}`)
    }
}


function sayMyName(){
    console.log(`my name is ${this.name}`)
}
person.sayMyName()

//explicit binding
// in explict binding we pass the object instance as parameter
sayMyName.call(person);

//new binding
function Person(name){
    this.name=name
}

const p1=new Person('Harshith')
const p2= new Person('Giridhar')

console.log(p1.name,p2.name)

//default binding
globalThis.name='Superman'
sayMyName()