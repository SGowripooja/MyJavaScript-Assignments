// Write a 'Person' class to hold all details: 
class Person{
    constructor (firstName, lastName, age, country, hobby, degree){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country 
        this.hobby = hobby 
        this.degree = degree 
        
    }
    firstName(){
        return this.firstName
    }
    lastName(){
        return this.lastName
    }
    age(){
        return this.age
    }
    country(){
        return this.country
    }
    hobby(){
        return this.hobby
    }
    degree(){
        return this.degree
    }
}

let abc = new Person('S.Gowri', 'pooja',24,'India','Dance','B.E');
console.log(abc.firstName, abc.lastName + ' lives in ' + abc.country);
