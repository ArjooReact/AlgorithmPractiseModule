import {React, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

const CallbackHell = () => {
  let [cheese, setCheese] = useState('');
  let [cheeseProcees, setCheeseProcess] = useState('');

  let [dough, setDough] = useState('');
  let [doughProcess, setDoughProcess] = useState('');

  let [pizza, setPizza] = useState('');
  let [pizzaProcess, setPizzaProcess] = useState('');
  useEffect(() => {
    callBackHell();
  }, []);
  function getCheese(_mCallback) {
    setTimeout(() => {
      let cheese = '🧀';
      console.log('here is cheese ' + cheese);
      _mCallback(cheese);
    }, 3000);
  }

  function makeDough(cheese, _mCallback) {
    setTimeout(() => {
      let dough = cheese + ' ' + '🍩';
      console.log('Here is dough ' + dough);
      _mCallback(dough);
    }, 3000);
  }

  function bakePizza(dough, _mCallback) {
    setTimeout(() => {
      let pizza = dough + ' ' + '🍕';
      console.log('Here is pizza....' + pizza);
      _mCallback(pizza);
    }, 3000);
  }

  //excessive amount of nested callback functions are being executed.
  //It reduces code readability and maintenance.
  //The callback hell situation typically occurs when dealing with asynchronous request operations, such as making multiple API requests
  // this is basically a callbackhell calling one callback inside another callback
  //this is also a drawback for callback a callback hell is created
  // this should be resolved by promise
  function callBackHell() {
    getCheese(cheese => {
      console.log(cheese);
      setCheese(cheese);
      setCheeseProcess('Your Cheese is ready');
      makeDough(cheese, dough => {
        setDough(dough);
        setDoughProcess('Here dough is ready...');
        bakePizza(dough, pizza => {
          setPizza(pizza);
          setPizzaProcess('Here pizza is ready::::');
        });
      });
    });
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>{cheese}</Text>
      <Text>{cheeseProcees}</Text>

      <Text>{dough}</Text>
      <Text>{doughProcess}</Text>

      <Text>{pizza}</Text>
      <Text>{pizzaProcess}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default CallbackHell;

////// callback hell using js ////////

function makeCheese(_mCallback){
  setTimeout(()=>{
    let cheese='cheese is ready'
    _mCallback(cheese)
  },3000)
}

function makeDough(cheese,_mCallback){
  setTimeout(()=>{
    let dough=cheese+'  Dough isready'
    _mCallback(dough)
  },3000)
}

function makePizza(dough,_mCallback){
  setTimeout(()=>{
    let pizza=dough+'  pizza is ready....'
    _mCallback(pizza)
  },3000)
}

function callbackHell(){
  makeCheese(cheese=>{
  console.log('cheese.....',cheese)
  makeDough(cheese,dough=>{
    console.log('dough.....',dough)
    makePizza(dough,pizza=>{
      console.log('pizzaa..........',pizza)
    })
  })
})
}

callbackHell()



