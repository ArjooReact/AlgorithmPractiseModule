// concept of call,apply and bind

let person={
  firstName:'Arzoo',
  lastName:'Sharma',
}
let getDetails=function(city,state){
    console.log(this.firstName+' '+city+' '+state)
  }

let person1={
  firstName:'Rajveer',
  lastName:'Sharma',
}

//person.getDetails.call(person1)
// In call method we pass argument as comma separator
getDetails.call(person,'kolkata','wb')
//In bind methos we pass second Argument as Array list
getDetails.apply(person,['kolkata','wb'])

let getFunc=getDetails.bind(person,['kolkata','wb'])
getFunc()

// concept of spread operator and rest operator

let array1=[1,2,3,4,5,6,7]
let array2=[9,8,6,5,4,3,2]
// Uses 1
let combinedArray=[...array1,...array2]
console.log(combinedArray)
// Uses 2
let resultantArray=[...array1,700]
console.log(resultantArray)
//Uses 3
let obj1={
  firstName:'Arzoo',
  lastName:'Sharma',
  test:4
}
let obj2={
  Dob:'01-08-1988',
  City:'Kolkata',
  test:8
}
//Difference between Object.assign and Spread Operator
//Both are the part of Shallow Copy
//Object.assign{} mutate the source value i.e(first val) but not rest operator
let obj4=Object.assign(obj1,obj2)
let obj3={...obj1, ...obj2}
console.log(obj3)
console.log(obj4)
//Mutate the value of Source which is obj1 remaining value obj2 is same
console.log('Target:::',obj1)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const val={q:4,p:67}
const returnedTarget = Object.assign(target, source,val);
//Changes the value of target
console.log(target); 
console.log(returnedTarget);

// Concept of RestOperator
// With the help of Rest Operator we can pass n numbers of params from function
function sum(...numbers){
  console.log('Numbers::',numbers)
  return numbers.reduce((acc,res)=>{ return acc=acc+res })
}
console.log(sum(1,3,6))

// Calculating total ages Of Person In party Both Guest and  Host Using Rest Operator
function calculateTotalAgesForBothGuestAndHost(hostAge,...guestAge){ 
  let totalSumOfGuestAges=guestAge.reduce((acc,res)=>{return acc=acc+res  })
  console.log('Guest Ages::',totalSumOfGuestAges)
  return hostAge+totalSumOfGuestAges
}




