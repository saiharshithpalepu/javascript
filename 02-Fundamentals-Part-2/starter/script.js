'use strict'
let hasdriverslicense=false
let passTest=true
if(passTest) hasdriverslicense=true
console.log(hasdriverslicense)

function logger(){
    console.log('my name is harshith')
}

logger()
logger()

function fruitProcessor(apples,oranges){
console.log(apples,oranges)
const juice=`juice with ${apples} apples and ${oranges} oranges`
return juice
}

const appleJuice=fruitProcessor(5,0)
console.log(appleJuice)

const appleOrangeJuice=fruitProcessor(2,4)
console.log(appleOrangeJuice)

function calcAge1(birthyear){
    return 2037-birthyear
}

const calcAge2= function(birthyear){
    return 2037-birthyear
}

const age1=calcAge1(1991)
const age2=calcAge2(1991)
console.log(age1,age2)

const calcage3 = birthyear => 2037-birthyear
const age3=calcage3(1997)
console.log(age3)

const yearsUntilRetirement= (birthYear,firstName) =>{
    const age= 2037 - birthYear
    const retirement = 65-age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991,'jonas'))

function cutPieces(fruit){
    return fruit *4 
}

function fruitProcessor2(apples,oranges){
    const applePieces=cutPieces(apples)
    const orangePieces=cutPieces(oranges)
    const juice =`juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
    return juice
}

console.log(fruitProcessor2(2,4))

function calAge(birthyear){
    return 2037 - birthyear
}

function yearsforRetirement(firstName,birthyear){
    const age=calAge(birthyear)
    const retirement= 65-age
    if(retirement>0){
        console.log(`${firstName} has ${age} years to retire`)
    }else{
        console.log(`${firstName} has already retired`)
    }
}

yearsforRetirement('jonas',1980)
yearsforRetirement('mike',1950)

const friend1= 'Michael'
const friend2= 'Steve'
const friend3='bob'

const friends=['Michael','Steve','Bob']
console.log(friends[0])
console.log(friends[1])
console.log(friends.length)
console.log(friends[friends.length-1])

friends[1]='jay'
console.log(friends)

const jonas =['jonas','schmedtmann',2037-1991,'teacher',friends]
console.log(jonas.length)

const birth_years=[1990,1997,1967,2007,2010]
const age_1 = calAge(birth_years[0])
const age_2 =calAge(birth_years[1])
const age_3= calAge(birth_years[4])
console.log(age_1,age_2,age_3)

const ages=[calAge(birth_years[0]),calAge(birth_years[1]),calAge(birth_years[4])]
console.log(ages)

const friends_1=['bob','jonas','steven','mary']
friends_1.push('jay')
console.log(friends_1)
friends_1.unshift('john')
console.log(friends_1)
let popped_friend=friends_1.pop()
console.log(friends_1)
console.log(popped_friend)
friends_1.shift()
console.log(friends_1)
console.log(friends_1.indexOf('bob'))
console.log(friends_1.includes('bob'))

const jones={
    firstName:'Jones',
    lastName:'Schmedtmann',
    age:2037-1991,
    job:'teacher',
    friends:['michael','steve','job'],
    calcAge:function(birthYear){
        return 2037- birthYear
    }
}

console.log(jones.firstName)
console.log(jones["lastName"])
let nameKey='Name'
console.log(jones['first'+nameKey])
console.log(jones['last'+nameKey])

jonas.Location='Portugal'
jonas.twitter='@jonasschmedtmann'

console.log(jones)
console.log(`${jones.firstName} has ${jones.friends.length} friends and his best friend is ${jones.friends[0]} `)
console.log(jones.calcAge(1991))
console.log(jones["calcAge"](1991))

 const ram={
    firstName:'ram',
    lastName:'Krishna',
    birthYear:1991,
    friends:['sita','hanuman','lakshman'],
    job:'warrior',
    calcAge:function(){
       return 2037 - this.birthYear
    },
    hasDriversLicense:false 
}

console.log(ram.calcAge())
console.log(`${ram.firstName} is a ${ram.calcAge()} year old warrior and 
he has ${ram.hasDriversLicense?'a':'No'} drivers license`)

