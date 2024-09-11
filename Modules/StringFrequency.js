import {React,useState,useEffect} from 'react'
import { StyleSheet,Text,SafeAreaView,View } from 'react-native'

const StringFrequency= ()=>{
    let str= 'geeekkkkkttttttpppp9p7pypppp'
let map={}
let map2={}
let map_class=new Map()
let ary=[7,1,3,4,10,13,8,7,65,8,7,1,1]
useEffect(()=>{
    //https://www.geeksforgeeks.org/how-to-store-a-key-value-array-in-javascript/
    // console.log('Maximum frquency letter is::::'+getString('rajveer sharma'))
     console.log('OUTPUT IS:::::'+getFrequencyAndStringSidebySide('geeeEEkkkssg'))
     console.log(getStringFrequencybyUsingObject('ggfffffeeeeeyyyyyykkkkkkkkkkkb'))
     console.log(getMaximumFrequencyStringUsingMapClass('uuuuyyrrtbjkkkll'))
     getFrequencyOfConsequtiveString(str)

     quickSort(ary,0,ary.length-1)
//console.log('PARTITION_INDEX:::::',getPartitionIndex(ary,0,ary.length-1))
console.log('QUICKSORTED_ARRAY::::::::',ary)
    },[])


//////// QUICK SORTING///////////////////////

function getPartitionIndex(ary,low,high){
    
    let pivot=ary[low]
    let i =low+1
   // let j=ary.length-1
    let j=high
    let temp=''
    
    // console.log('PIVOT_ELEMENT:::',pivot)
    // console.log('i Index element is:::',i)
    // console.log('j Index element is::::',j)
    
    do{
    while(ary[i]<=pivot){
        i++
    }
    while(ary[j]>pivot){
        j--
    }
    if(i<j){
        temp=ary[i]
        ary[i]=ary[j]
        ary[j]=temp
    }
    }while(i<j)
    
    temp=ary[low]
    ary[low]=ary[j]
    ary[j]=temp
    
    return j
}

function quickSort(ary,low,high){
    
    if(low<high){
    let partitionIndex=getPartitionIndex(ary,low,high)
    quickSort(ary,low,partitionIndex-1)
    quickSort(ary,partitionIndex+1,high)
    }
}









//This function is basically to calculate the frequency of most use letter
    function getString(str){
      console.log(str)
      str_ary=str.split('')
      console.log(str_ary)

      str_ary.forEach((element,index) => {
        console.log(element)
        let key=element
        if(map[key]>=1){
           map[key]=map[key]+1
        }else{
            map[key]=1
        }
      });
      //let map = new Set()
      console.log(map)
      let max=0
      let char=str[0]
     
      Object.keys(map).forEach((element,index)=>{
         console.log('Key:::',element)
         console.log('Value::::::',map[element])

         if(map[element]>max){
            max=map[element]
            char=element
         }
         
      })
      return char
    }

    ////Printing frequency of each character just after its consequtive occurence
    //i/p: GeeeEEkkkss
    //o/p: G1e3E2K3s2

    function getFrequencyAndStringSidebySide(str){
        let str_ary=str.split('')

        str_ary.forEach((element,index)=>{
            
            if(map2[element]>=1){
                map2[element]=map2[element]+1
            }else{
                map2[element]=1
            }
        })
        console.log(map2)
        var result=''

        //This line is basically used to get key of all the Objects
        console.log('Object::',Object.keys(map2))

        Object.keys(map2).forEach((element,index)=>{
            console.log(element)
            result=result+element+map2[element]
        })
        console.log('res:'+result)

        return result
    }

  
    function getFrequencyOfConsequtiveString(str){
        console.log(str)
        let a= str.split('')
        console.log(a)
        let max_c=0
        let max_char=''
        let count=0
        for(let i = 0;i<a.length;i++){
            
            for(let j=i+1;j<a.length;j++){
                if(a[i]==a[j]){
                    count++
                    break
                }else{
                    count=0
                    break
                }
            }
            console.log(count)
            if(count>max_c){
                max_c=count
                max_char=a[i]
            }
        }
        
        console.log('Max count::::'+max_c)
        console.log('Max char::::'+max_char)
    }


    
let map_test={}
function getStringFrequencybyUsingObject(str){
    let str_ary=str.split('')
   
   str_ary.forEach((element,index)=>{
       if(map_test[element]>=1){
           map_test[element]=map_test[element]+1
       }else{
           map_test[element]=1
       }
   }) 
   
   let max_val=0
   let char=''
   Object.keys(map_test).forEach((element,index)=>{
       if(map_test[element]>max_val){
           max_val=map_test[element]
           char=element
       }
   })
   
    return `Maximum Repeating Frequency is ${max_val} and Maximum Frequency Letter is ${char}`
}


function getMaximumFrequencyStringUsingMapClass(str){
    console.log(str) 
    let str_ary=str.split('')
   // console.log(str_ary)
    
    str_ary.forEach((element,index)=>{
       // console.log(element)
        
        if(map_class.get(element)>=1){
            map_class.set(element,map_class.get(element)+1)
        }else{
            map_class.set(element,1)
        }
        
    })
   let max_count=0
   let char=''
   let key_ary=[]
   let count=0
   // Printing
     for (var key of map_class.keys()) {
        console.log(key)
        key_ary[count]=key
        count++
        console.log(map_class.get(key))
        if(map_class.get(key)>=max_count){
            max_count=map_class.get(key)
            char=key
        }
     }
     console.log(map_class)
     console.log(max_count)
     console.log(key_ary)
     
 }
 function getMaximumFrequencyStringUsingMapClass(str){
    console.log(str) 
    let str_ary=str.split('')
   // console.log(str_ary)
    
    str_ary.forEach((element,index)=>{
       // console.log(element)
        
        if(map_class.get(element)>=1){
            map_class.set(element,map_class.get(element)+1)
        }else{
            map_class.set(element,1)
        }
        
    })
   let max_count=0
   let char=''
   let key_ary=[]
   let count=0
   // Printing
     for (var key of map_class.keys()) {
        console.log(key)
        key_ary[count]=key
        count++
        console.log(map_class.get(key))
        if(map_class.get(key)>=max_count){
            max_count=map_class.get(key)
            char=key
        }
     }
     // console.log(map_class)
    // console.log(max_count)
    // console.log(key_ary)
    return `Maximum repeating frequency count is ${max_count}`
 }
  
  
    return(<SafeAreaView style={styles.mainContainer}>
    <Text>Strings</Text>
    </SafeAreaView>)
}

const styles= StyleSheet.create({
    mainContainer:{
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default StringFrequency