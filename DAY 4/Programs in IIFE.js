// 1. Function Print odd numbers in an array:
let a = [3,5,7,6,2,1,17];
(function(arr){
    let b=[];
    for (i=0; i<a.length;i++){
        if(a[i]%2!=0){
           b.push(a[i]); 
        }
    }
    b=b.join(" ");
    console.log(b);
    }) (a);

    // 2. Convert all the strings to title caps in a string array:
(function strCaps (str){
    str=str.toLowerCase().split(" ");
    for (let i =0 ; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(" "));
}) ('flabbergasted on codes');

// 3. Sum of all numbers in an array:
(function sumAll(arr){
    let ans=0;
    for(let i=0; i<arr.length;i++){
        ans = ans+arr[i];
    }
    console.log(ans);
}) ([-1,1,7,5,-1]);

// 4. Return all the prime numbers in an array

   (function primeNo (arr1){
    let b=[];
    for (let i=0; i<arr1.length; i++){
        if (arr1[i]==2){
            b.push(arr1[i]);
        }
        else if (arr1[i]==1){
            b.push(arr1[i]);
            b.pop(arr1[i]);
        }
        else if(arr1[i]%2!=0){
            b.push(arr1[i]);
        }
    }
    console.log(b);
    
}) ([1,2,3,4,5,6,7,11,13,17,19]);

// 5. Return all the palindromes in an array
let isPalindromic = function (s){
    let a = s;
    s=s.split('').reverse().join('');
    return s==a;
};
(function palindromeCheck(arr,N){
      let ans=[];
      for (let i=0; i<N; i++){
        if (isPalindromic(arr[i])){
            ans.push(arr[i]);
        }
      }
      if (ans.length==0){
        console.log('-1')
    }
    else{
    console.log(ans);
    }
  }) (["Ada", "car", "abd", "lilly", "cool" ,"rose"],6);

  //   6. Return median of two sorted arrays of the same size.
let e = 0;
  (function medianArray (c,d){
   e= (parseInt(c[c.length-1])+parseInt(d[0]))/2;  
   console.log(e);
}) ([1, 2, 9, 20],[8, 4, 7, 11]);

// 7.Remove duplicates from an array

let arr1 = [1,2,3,4,5,5,4,7,7,7,1];
( function isDuplicate (arr){
    let dup = [];
    for (let i of arr){
         if(dup.indexOf(i)===-1){  //The indexOf() method returns -1 if the element is not in the array.
            dup.push(i);
        }
    }
    console.log(dup);
}) (arr1);

// 8. Rotate an array by k times
let k=4;
let array = [1,2,3,4,5,6,7];
// Output = 1st rotation = [7,1,2,3,4,5,6]
// Output = 2nd rotation = [6,7,1,2,3,4,5]
// 3rd rotation = [5,6,7,1,2,3,4]
// 4th rotation = [4,5,6,7,1,2,3]
(function rotateArra (arr,k){
for (let i=0; i<k; i++){
    array.unshift(array.pop());
    // pop method returns the last removed element // unshift method adds the specified element in the brakect to the 1st of the array.
}
console.log(array);
}) (array,k);



     