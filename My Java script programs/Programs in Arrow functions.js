// 1. Function Print odd numbers in an array:
const printOdd = (a) => {
    let b=[];
    for (i=0; i<a.length;i++){
    if(a[i]%2!=0){
       b.push(a[i]); 
    }
}
    console.log(b);
 };
  printOdd([1,2,3,4,5,23,31,37,-1,-5]);

  // 2. Convert all the strings to title caps in a string array:
let strCaps = (str) => {
    str=str.toLowerCase().split(" ");
    for (let i =0 ; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
};
console.log(strCaps('this is executed using arrow function syntax'));

// 3. Sum of all numbers in an array:
let sumAll = (arr) => {
    let ans=0;
    for(let i=0; i<arr.length;i++){
        ans = ans+arr[i];
    }
    return ans;
};
console.log(sumAll([23,27,50,24,26]));


// 4. Return all the prime numbers in an array

let primeNo = (arr) => {
    let b=[];
    for (let i=0; i<arr.length; i++){
        if (arr[i]==2){
            b.push(arr[i]);
        }
        else if (arr[i]==1){
            b.push(arr[i]);
            b.pop(arr[i]);
        }
        else if(arr[i]%2!=0){
            b.push(arr[i]);
        }
    }
    return b;
    
};
console.log(primeNo([1,5,3,4,5,6,7,11,13,17,19,31,33]));

// 5. Return all the palindromes in an array
let arr= ["civic", "radar", "level", "rotor", "rose"];
let N=arr.length;
let isPalindromic = function(s){
    let a = s;
    s=s.split('').reverse().join('');
    return s==a;
}
  let palindromeCheck = (arr,N) => {
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
   };  palindromeCheck(arr,N);

