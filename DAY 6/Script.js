// Creating a class called 'movie' & stating its given properties:
class Movie {
    constructor (title, studio, rating='PG'){
         this.title = title 
         this.studio = studio
         this.rating = rating 
    }
    setTitle(){
           return this.title
    }
    setStudio(){
        return this.studio
 }
    setRating(){
      return this.rating

}
    
}

let casinoRoyale = new Movie ('Casino Royale','Eon Productions','PG13');
console.log(casinoRoyale.setStudio())
let newWars = new Movie ('Red', 'VGP Studio');
console.log(newWars.setRating())
let pgMovies = [
    {name:'ABC',rating:'PG'},
    {name:'Goa',rating:'PG15'},
    {name:'Think',rating:'PG12'},
    {name:'Big',rating:'PG'},
    {name:'Theroy',rating:'PG'}
];
let PGmovies = pgMovies.filter((pgMovies)=>pgMovies.rating==='PG');
console.log(PGmovies);


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


// Creating a 'Circle' Class with given properties:
class Circle {
    constructor(radius, colour){
        this.radius = radius 
        this.colour = colour 
    }
    getRadius(){
        return this.radius
    }
    setRadius (radius){
        this.radius = radius
        return this.radius
    }
    getColour(){
        return this.colour
    }
    setColour (colour){
        this.colour = colour
        return this.colour
    }
    /*convertString(radius){
        return String(this.radius) 
    }*/
    area(radius){
        let A = Math.PI*(radius*radius)
        return A.toFixed(2);
    }
    circumference(radius){
        let B=2*Math.PI*radius
        return B.toFixed(2)
    }
}


let vattam = new Circle(2,'red')
console.log(vattam.area(4));
console.log(vattam.circumference(3));
//console.log(vattam.convertString(7));

// Creating a class to get Uber price: 
class uberRide {
    constructor (name, pickUp, destination , totalKm){
        this.name = name
        this.pickUp = pickUp 
        this.destination = destination 
        this.totalKm = totalKm 

    }
    getName (){
        return this.name
    }
    getpickUp(){
        return this.pickUp
    }
    getDestination(){
        return this.destination
    }
    getTotalkm(){
        return this.totalKm
    }
    getFare(){
        let A = this.totalKm*5.3
        return A
    }
}

let Uber = new uberRide('SGowripooja','Kpm','Goa',254)
console.log(Uber.getFare().toFixed(0))
console.log(Uber.getName())



