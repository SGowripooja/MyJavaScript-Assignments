// 1. Function Print odd numbers in an array:
let printOdd = function(arr){
let b=[];
for (i=0; i<a.length;i++){
    if(a[i]%2!=0){
       b.push(a[i]); 
    }
}
b=b.join(" ");
console.log(b);
}
let a = [1,2,3,1,3,1,7];
printOdd(a);
 
// 2. Convert all the strings to title caps in a string array:
let strCaps = function(str){
    str=str.toLowerCase().split(" ");
    for (let i =0 ; i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
console.log(strCaps('gowri pooja'));

// 3. Sum of all numbers in an array:
let sumAll = function(arr){
    let ans=0;
    for(let i=0; i<arr.length;i++){
        ans = ans+arr[i];
    }
    return ans;
};
console.log(sumAll([1,2,3,4,100,99]));

// 4. Return all the prime numbers in an array

   
let primeNo = function(arr){
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
console.log(primeNo([1,2,3,4,5,6,7,11,13,17,19]));

// 5. Return all the palindromes in an array
let isPalindromic = function(s){
    let a = s;
    s=s.split('').reverse().join('');
    return s==a;
}
  let palindromeCheck = function(arr,N){
      let ans=[];
      for (let i=0; i<N; i++){
        if (isPalindromic(arr[i])){
            ans.push(arr[i]);
        }
      }
      return ans;
  }
  let arr= ["abc", "car", "abd", "lilly", "cool" ,"rose"];
  let N=arr.length;
  let result=palindromeCheck(arr,N);
  if (result.length==0){
    console.log('-1');
  }
  else{
console.log(result);
  }

//   6. Return median of two sorted arrays of the same size.
let a1 = [1, 2, 9,10];
let b1= [3, 4, 7,11];
let e=0;
let medianArray = function(c,d){
   e= (parseInt(c[c.length-1])+parseInt(d[0]))/2;  
   return e;
}

console.log(medianArray(a1,b1));

// 7.Remove duplicates from an array

let arr1 = [1,2,3,4,5,5,4,2,3,1,1];
let isDuplicate = function(arr){
    let dup = [];
    for (let i of arr){
         if(dup.indexOf(i)===-1){  //The indexOf() method returns -1 if the element is not in the array.
            dup.push(i);
        }
    }
    return dup;
};
console.log(isDuplicate(arr1));

// 8. Rotate an array by k times
let k=3;
let array = [1,2,3,4,5,6];
// Output = 1st rotation = [6,1,2,3,4,5]
// Output = 2nd rotation = [5,6,1,2,3,4]
// 3rd rotation = [4,5,6,1,2,3]
let rotateArray = function(arr,k){
for (let i=0; i<k; i++){
    array.unshift(array.pop());
    // pop method returns the last removed element // unshift method adds the specified element in the brakect to the 1st of the array.
}
return array;
}
console.log(rotateArray(array,k))
