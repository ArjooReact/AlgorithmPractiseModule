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

person.getDetails.call(person1)
getDetails.call(person,'kolkata','wb')
getDetails.apply(person,['kolkata','wb'])

let getFunc=getDetails.bind(person,['kolkata','wb'])
getFunc()

