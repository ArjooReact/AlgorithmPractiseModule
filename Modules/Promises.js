import {React,useState,useEffect} from 'react'
import { StyleSheet,SafeAreaView,Text } from 'react-native'

const Promises= ()=>{

    let [cheese,setCheese]=useState('')
    let [cheeseProcees,setCheeseProcess]=useState('')

    let[dough,setDough]=useState('')
    let [doughProcess,setDoughProcess]=useState('')

    let[pizza,setPizza]=useState('')
    let [pizzaProcess,setPizzaProcess]=useState('')

    useEffect(()=>{
        getOrderPizza()
    //  getCheese()
    //  .then((cheese)=>{
    //    console.log(cheese)
    //    setCheese(cheese)
    //    setCheeseProcess('your cheese is ready '+cheese)
    //    return makeDough(cheese)
    //  })
    //  .then((dough)=>{
    //     setDough(dough)
    //     setDoughProcess('your dough is ready...')
    //     return bakePizza(dough)
    //  })
    //  .then((pizza)=>{
    //     console.log(pizza)
    //      setPizza(pizza)
    //      setPizzaProcess('your pizza is ready :::')
    //  }).catch(()=>{
    //     console.log(console.error())
    //  }).finally(()=>{
    //     console.log('Process Ended::::')
    //  })
    },[])

    function getCheese(){
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            let cheese= '🧀'
            console.log('here is cheese '+cheese)
            resolve(cheese)
          },3000)
        })
    }

    async function getOrderPizza(){
        try{
        let cheese= await getCheese()
        console.log(cheese)
        setCheese(cheese)
        setCheeseProcess('cheese is ready')
        console.log('1')

        let dough = await makeDough(cheese)
        console.log(dough)
        setDough(dough)
        setDoughProcess('your dough is ready::')
        console.log('2')

        let pizza = await bakePizza(dough)
        console.log(dough)
        setDough(dough)
        setDoughProcess('Your pizza is ready::::')
        console.log('3')
        }catch(error){
            console.log('Error occured '+error)
        }finally{
         console.log('Process end')
        }
    }

    function makeDough(cheese){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
             let dough= cheese+' '+'🍩'
             console.log('your dough is ready '+dough)
             resolve(dough)
           },3000)
        })
    }

    function bakePizza(dough){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let pizza= dough+' '+'🍕'
                console.log('here is pizza::'+pizza)
                resolve(pizza)
            },3000)
          
        })
    }

    return(<SafeAreaView style={styles.mainContainer}>
    <Text>{cheese}</Text>
    <Text>{cheeseProcees}</Text>
    <Text>{dough}</Text>
    <Text>{doughProcess}</Text>
    <Text>{pizza}</Text>
    <Text>{pizzaProcess}</Text>
    </SafeAreaView>)
}

const styles= StyleSheet.create({
    mainContainer:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Promises