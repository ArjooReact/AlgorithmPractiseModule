// Array Sort in one line Linear serach

//Descending to Ascending form
let arr=[5,7,1,4,8,9,1,4]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    let temp=0
   if(arr[i]>=arr[j]){
       temp=arr[i]
       arr[i]=arr[j]
       arr[j]=temp
      // i++
   }
    }
}
console.log(arr)

//Array Sort Ascending to Descending form
let arr=[5,7,1,4,8,9,1,4]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    let temp=0
   if(arr[i]>=arr[j]){
       temp=arr[i]
       arr[i]=arr[j]
       arr[j]=temp
      // i++
   }
    }
}
console.log(arr)
