import {React,useEffect,useState} from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'


const SyncCallback = ()=>{
let [add,setAdd]= useState(0)
    useEffect(()=>{
        setAdd(sum(3,4))
        sync_sum(9,3,(result)=>{
         console.warn(result)
        })
        async_sum(4,5,(result)=>{
         console.warn(result)
        })
    },[])
    // this is simple javascript function
  let sum= (x,y)=>{
    return x+y
  }

  // this is basically a synchronous callback
  let sync_sum=(a,b,_mCallback)=>{
    let addition=a+b
     _mCallback(addition)
  }

  // this is basically a asynchronous callback
  let async_sum= (a,b,_mCallback)=>{
    setTimeout(()=>{
      let c = a+b
      console.warn('calling async_sum '+c)
      _mCallback(c)
    },9000)
  }

    return (<SafeAreaView style= {styles.mainContainer}>
     <Text>This is SyncCallback</Text>
     <Text>{add}</Text>
    </SafeAreaView>)
}

const styles= StyleSheet.create({
    mainContainer:{
     justifyContent:'center',
     alignItems:'center'
    }
})

export default  SyncCallback