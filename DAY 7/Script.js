// Get all the countries from Asia continent /region 
let xhr = new XMLHttpRequest();
xhr.open("GET" , 'https://restcountries.com/v3.1/all');
xhr.send();
let data=[];
xhr.onload = function(){
    data = JSON.parse(xhr.response);
    console.log(data)
   var result = [];
   for(var i in data){
     result.push([i,data [i]]);  
   }
   //
   console.log(result)
   for (let j=0; j<result.length; j++){
    for(let k=1; k<=result.length; k++){
        if (result[j][k]?.region==='Asia'){
           console.log(('Countries in Asian continent are '+result[j][k]?.name.common));
        }
    }
   }

  //Get all the countries with a population of less than 2 lakhs 
 
   for (let j=0; j<result.length; j++){
    for(let k=1; k<=result.length; k++){
  if (result[j][k]?.population<200000){
    console.log(('Population less than 2 lakhs is '+result[j][k]?.name.common))
}
    }
}
//Print the following details name, capital, flag

for (let j=0; j<result.length; j++){
    for(let k=1; k<=result.length; k++){
    console.log((`Name is ${result[j][k]?.name.common} , capital is ${result[j][k]?.capital}, flag is ${result[j][k]?.flag}`))
}
    }

//    let sum=0;
// for (let j=0; j<result.length; j++){
//     for(let k=1; k<=result.length; k++){
//         if(result[j][k]?.population==='undefined'){
//             sum=sum+0
//         }
//         else{
//     sum = sum+(result[j][k]?.population);
//         }
// }
//     }

//     console.log(sum)

//Print the country that uses US dollars as currency.

for (let j=0; j<result.length; j++){
    for(let k=1; k<=result.length; k++){
        if(result[j][k]?.currencies?.USD?.name==="United States dollar")
        {
            console.log(result[j][k]?.name.common)
        }
    }
    }

}