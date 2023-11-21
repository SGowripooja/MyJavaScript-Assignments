// Normal comparison using objects :
const obj1 = { name: "Jack", age: 25 };
const obj2 = { age: 25, name: "Jack" };
let objEqual = false;
const obj1Keys = Object.keys(obj1).sort();
const obj2Keys = Object.keys(obj2).sort();
if (obj1Keys.length !== obj2Keys.length) {
  console.log(objEqual);
} else {
  const areEqual = obj1Keys.every((key, index) => {
    const objValue1 = obj1[key];
    const objValue2 = obj2[obj2Keys[index]];
    return objValue1 === objValue2;
  });
  if (areEqual) {
    objEqual = true;
    console.log(objEqual);
  } else {
    console.log(objEqual);
  }
}
// Using the functions: 
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
//But it gives false.

// var isEqualsJson = (obj1,obj2)=>{
//    let keys1 = Object.keys(obj1);
//    let keys2 = Object.keys(obj2);
//     //return true when the two json has same length and all the properties has same value key by key
//     return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
// }
// var object1 = {a:1,b:2,c:3};
// var object2 = {a:1,b:2,c:3}; 
// console.log("json is equals: "+ isEqualsJson(object1,object2));
// alert("json is equals: "+ isEqualsJson(object1,object2));





