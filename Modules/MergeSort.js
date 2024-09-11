import {React, useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const MergeSort = () => {
  console.log('WELCOME TO MERGE SORTING ALGO');
  let temp_arr = [];
  let count = 0;
  useEffect(() => {
    let arr = [2, 10, 8, 9, 19, 1, 1, 6, 5, 7, 6, 12];
    //console.log('slice'+arr.slice(0,4))
    console.log(arr);
    //let arr=[2,3,1,5]
    let low = 0;
    let high = arr.length - 1;

    mergeSort(arr, low, high);
    console.log('Final_array is', arr);

    //// bubble sort algo
    let arr_bubble = [4, 76, 2, 99, 67, 3, 2];
    BubbleSorting(arr);
    console.log('Bunbble SORTED_ARRAY::::', arr);

    let arr2 = [6, 3, 9, 5, 2, 8, 1];
    let low2 = 0;
    let high2 = arr2.length - 1;
    partition(arr2, low2, high2);
    console.log('PARTITION ARRAY::::', arr2);
  }, []);

  ///// M E R G E _ S O R T I N G _ A L G O /////////////////////

  ///// M E R G E _ S O R T I N G _ A L G O /////////////////////
  // let temp_arr=[]
  // let count=0

  function mergeSort(arr, low, high) {
    if (low >= high) {
      return;
    }
    // var mid =low+ parseInt((high-low)/2);
    let mid = parseInt((low + high) / 2);
    console.log('mid inside is:::::', mid);
    // let mid = arr[Math.round((arr.length - 1) / 2)];

    // console.log('Mid value is ',mid)
    // if(low<high){
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    doMerge(arr, low, mid, high);
    //}
  }

  function doMerge(arr, low, mid, high) {
    let i = low;
    let j = mid + 1;
    // const temp_arr=[high-low+1]
    const temp_arr = [];
    //let count=0

    while (i <= mid && j <= high) {
      if (arr[i] <= arr[j]) {
        //  temp_arr[count]=arr[i]
        temp_arr.push(arr[i]);
        i++;
        // count++
      } else {
        //  temp_arr[count]=arr[j]
        temp_arr.push(arr[j]);
        j++;
        //count++
      }
    }

    while (i <= mid) {
      // temp_arr[count]=arr[i]
      temp_arr.push(arr[i]);
      i++;
      // count++
    }
    while (j <= high) {
      // temp_arr[count]=arr[j]
      temp_arr.push(arr[j]);
      j++;
      // count++
    }
    //  [...temp_arr,...]
    console.log('TEMP ARRAY IS::::', temp_arr);
    for (let i = low; i <= high; i++) {
      arr[i] = temp_arr[i - low];
    }

    console.log('Sorted Array is:::::', arr);
  }

  function partition(arr, low, high) {
    let pivot = low;
    let i = low + 1;
    let j = high;
    if (i < j) {
      while (i <= pivot) {
        i++;
      }
      while (j <= pivot) {
        j--;
      }
      let temp = 0;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    } else {
      let temp = 0;
      temp = arr[j];
      arr[j] = arr[pivot];
      arr[pivot] = temp;
    }
  }

  let arr = [4, 76, 2, 99, 67, 3, 2];

  function BubbleSorting(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      let j = i;
      let temp = 0;
      while (j > 0 && arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j++;
      }
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Welcome to Merge Sort</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default MergeSort;
