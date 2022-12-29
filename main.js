console.log('hello from main.js')

//variables

let age=25
console.log(age)

const salary=8000
console.log(salary)

const name='harshith'
const language='javascript'
const channel=`Code`

const totak=0
const pi=3.14

const isPrimaryNumber=true
const isNewUser=false

let result
console.log(result)

const data = null 

const person={
    'firstName':'bruce',
    'bruce':'wayne',
    'age':20
}

console.log(person.firstName)

const oddNumbers=[1,3,5,7,9]

console.log(oddNumbers[0])

console.log(Number('5'))
console.log(parseInt('3'))
console.log(parseFloat('3.14'))
console.log(String(500))
console.log((500).toString())
console.log(Boolean(10))

const var1='10'
const var2=10
console.log(var1==var2)
console.log(var1===var2)

color='red'

switch(color){
    case 'red':
        console.log('red')
        break
    case 'blue':
        console.log('blue')
        break
    case 'green':
        console.log('green')
        break
    default:
        console.log('not a valid color')
}

for(let i=1;i<=5;i++){
    console.log('iteration '+ i)
}

let i=1
while(i<=5){
    console.log('Iteration '+i)
    i++
}
let j=6

do{
    console.log('Iteration '+ j)
    j++
}while(j<=10)

const numArray=[11,12,13,14,15]

for(const num of numArray){
    console.log('Iteration '+num)
}

function greet(){
    console.log('Good evening Harshith')
}

function wish(username){
    console.log('Good Evening '+ username)
}

greet()
wish('harshith')

function add(a,b){
    return a+b
}

const arrowSum=(a,b) => {
    return a+b
}

const sum = arrowSum(25,25)
console.log(sum)


//nested function scope

let a=10

function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(a,b,c)
    }
    inner()
}

outer()
//closure
function outer1(){
    let counter=0
    function inner1(){
        counter++
        console.log(counter)
    }
    return inner1
}



let fn=outer1()
fn()
fn()