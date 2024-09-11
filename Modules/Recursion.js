import {React, useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const Recursion = () => {
  useEffect(() => {
    //printNumber(5)
    printingNumber(5);
    let str = 'Arzoouurtt';
    reverseStringUsingRecursionProcess(str, str.length - 1);

    let str2 = 'axbcxxd';
    removeParticularCharacterFromString(str2, 'x');
    //Call using Recursion
    moveAllx(str2, 0, 0, 'x', '');

    //// Remove Duplicate from array

    let str3 = 'abccdaaatttt';
    let map = {};
    sortDuplicateNumber(str3);
    doSort(str3);
    doSortUsingRecursion(str3, 0, map);

    //////////// Calling Factorial of A number /////////////

    factorial(5);
    let fact = 1;
    factorialWithRecursion(5, 1, fact);

    /////// Sum of N Natural numbers /////////
    sumWithoutUsingRecursion(5);
    let n = 5;
    let idx = 0;
    let result = 0;
    sum(n, idx, result);

    // Fibonacci Series Call
    //With Recursion
    let result_fibonacci = [];
    //fibonacciWithRecursion(6, 0, 1, 0, 0, result_fibonacci);

    //without Recursion
    //fibonacci(5);
  }, []);

  /// Printing a number in ascending pattern
  function printNumber(n) {
    // Writing BaseCase
    if (n < 0) {
      return;
    }
    console.log(n);
    printNumber(n - 1);
  }
  // Printing a number in descending number
  function printingNumber(n) {
    // Writing BaseCase
    if (n == 0) {
      return;
    }
    console.log(n);
    printingNumber(n - 1);
  }

  ///////Reverse a string

  function reverseStringUsingIterationProcess(str) {
    let str_ary = str.split('');
    let i = 0;
    let j = str_ary.length - 1;
    console.log(j);
    let temp_reverse = '';
    count = 0;
    while (i <= j) {
      temp_reverse = temp_reverse + str.charAt(j);
      j--;
    }
    console.log('REVERSE ARRAY:::', temp_ary);
  }

  function reverseStringUsingRecursionProcess(str, idx) {
    if (idx >= 0) {
      console.log(str.charAt(idx));
      reverseStringUsingRecursionProcess(str, idx - 1);
    }
  }

  /// move particular char at last index Normal Process

  function removeParticularCharacterFromString(str, char) {
    console.log(str);
    console.log(char);

    let temp_char = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'x') {
        count++;
      } else {
        temp_char = temp_char + str.charAt(i);
      }
    }
    for (let i = 0; i < count; i++) {
      temp_char = temp_char + char;
    }
    console.log('Without Using Recurssion', temp_char);
  }

  // USING RECURSION Moving all particular character to last
  function moveAllx(str, count, idx, char, newStr) {
    if (idx == str.length) {
      console.log(newStr);
      for (let i = 0; i < count; i++) {
        newStr = newStr + 'x';
      }
      console.log('WITH_RECURSION', newStr);
      return;
    }

    console.log(str.charAt(idx));
    if (str.charAt(idx) == 'x') {
      moveAllx(str, count + 1, idx + 1, 'x', newStr);
    } else {
      newStr += str.charAt(idx);
      moveAllx(str, count, idx + 1, 'x', newStr);
    }
  }

  //reverseString('Arzoo')
  let str = 'Arzoouurtt';
  reverseStringUsingRecursionProcess(str, str.length - 1);

  /// Remove Duplicate from Array

  ///// without using recursion

  function sortDuplicateNumber(str) {
    console.log(str);
    let map = {};
    let sorted_str = '';
    //let
    for (let i = 0; i < str.length; i++) {
      if (map[str.charAt(i)] >= 0) {
        map[str.charAt(i)] = map[str.charAt(i)] + 1;
      } else {
        map[str.charAt(i)] = 1;
      }
    }
    Object.keys(map).forEach((element, index) => {
      console.log('KEY:::', element);
      console.log('VALUE::::', map[element]);
      sorted_str = sorted_str + element;
    });
    console.log('REMOVING DUPLICATES WITHOUT USING RECURSSION', sorted_str);
  }

  // by using Map()
  function doSort(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
      if (map.get(str.charAt(i)) >= 1) {
        map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
      } else {
        map.set(str.charAt(i), 1);
      }
    }
    let keys = map.keys();
    console.log('666', keys);

    console.log(map);
  }

  ///// With using Recursion

  function doSortUsingRecursion(str, idx, map) {
    // Writing Base Case
    if (idx == str.length - 1) {
      console.log('jj', map);
      let sortArray = '';
      Object.keys(map).forEach((element, index) => {
        console.log('Element:::', element);
        sortArray = sortArray + element;
      });
      console.log(
        'REMOVING DUPLICATES FROM ARRAY USING RECURSION:::',
        sortArray,
      );
      return;
    }

    if (map[str.charAt(idx)] >= 0) {
      map[str.charAt(idx)] = map[str.charAt(idx)] + 1;
      doSortUsingRecursion(str, idx + 1, map);
    } else {
      map[str.charAt(idx)] = 1;
      doSortUsingRecursion(str, idx + 1, map);
    }
  }

  ////// Factorial Of A Number ////////////////

  function factorialWithRecursion(n, idx, fact) {
    //Writing Base Section
    if (idx == n + 1) {
      console.log(fact);
      return;
    }

    if (idx <= n) {
      fact = fact * idx;
      factorialWithRecursion(n, idx + 1, fact);
    }
  }

  function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
    console.log('Factorial of A numer:::', fact);
  }

  ///////////// SUM OF N NATURAL NUMBERS //////////////////

  //// WITH RECURSION /////
  function sum(n, idx, result) {
    //writing Base case
    if (idx > n) {
      console.log('Sum of N Natural Numbers is. ', result);
    }

    if (idx <= n) {
      result = result + idx;
      sum(n, idx + 1, result);
    }
  }
  //////// WITHOUT RECURSION ////////

  function sumWithoutUsingRecursion(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum = sum + i;
    }
    console.log('SUM OF N NATURAL NUMBERS WITHOUT RECURSION IS::::', sum);

    //////////////////// FIBONACCI SERIES ///////////////////////

    //Fibonacci without Recursion

    function fibonacci(n) {
      let a = 0;
      let b = 1;
      var c;

      for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log('Fibonacci Series Without Recursion', b);
      }
    }

    ///// Fibonacci with recursion

    function fibonacciWithRecursion(n, a, b, c, idx, result) {
      console.log('a');
      if (idx >= n) {
        console.log('Fibonacci Series With Recursion', result);
      }
      if (idx < n) {
        console.log('t');
        c = a + b;
        a = b;
        b = c;
        result.push(b);
        fibonacciWithRecursion(n, a, b, c, idx + 1, result);
      }
    }
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Welcome to Recursion</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Recursion;
