let sum=(num)=>{
    return num+10
}
let cache={}
let smartSum=(num)=>{
    
    if(num in cache){
        console.log('calling from cache')
        return cache[num]
    }else{
        console.log('calculating...')
        let result=sum(num)
        cache[num]=result
        return cache[num]
    }
}

console.time()
console.log(smartSum(40))
console.timeEnd()

console.time()
console.log(smartSum(40))
console.timeEnd()

console.time()
console.log(smartSum(40))
console.timeEnd()

console.time()
console.log(smartSum(40))
console.timeEnd()

///////// Memoization by using closures //////////


let sum=(n)=>{
    let result=0
    for(let i=0;i<=n;i++){
        result=result+i
    }
    return result
}

let smartSum=()=>{
    let cache={}
    return function(num){
         if(num in cache){
        console.log('calling from cache')
        return cache[num]
    }else{
        console.log('calculating...')
        let result=sum(num)
        cache[num]=result
        return cache[num]
    }
    }
    
   
}
let response=smartSum()
console.log('res',response)
console.time()
console.log(response(4000))
console.timeEnd()

console.time()
console.log(response(4000))
console.timeEnd()

console.time()
console.log(response(4000))
console.timeEnd()

console.time()
console.log(response(4000))
console.timeEnd()

