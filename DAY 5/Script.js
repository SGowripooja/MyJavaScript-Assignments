// JSON Iteration using for loop: 
 let xhr = new XMLHttpRequest();
 xhr.open("GET" , 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    console.log(data);     for (let i=0; i<data.length; i++){
        let ans = `${data[i].name.common}'s capital is ${data[i].capital} and present in  ${data[i].continents} continent`
        console.log(ans);
    }
}

// Creating own resume data in JSON Format: 
let myResume = {
    "generalDetails":{
        "firstName":"S.Gowri",
        "lastName": "pooja",
        "mailAddress":"xyz@gmail.com",
        "phoneNo": 7574658769,
        "location":{
            "address":"No.21 , xux street , mm nagar",
            "pin": 357696,
            "city": "usn",
        }
    },
    "educationWork" : [
      {"education": "BE",
    "completed": 2021,
    "cgpa": 9},
    {
        "firstJob":"Lcube",
        "secondJob":"Suprajit",
    } 
],
"interest":{
    "list": "reading books & dance"
}
}

    let stat1 = `${myResume.generalDetails.firstName} ${myResume.generalDetails.lastName} lives in ${myResume.generalDetails.location.city} city, who has completed her ${myResume.educationWork[0].education} in ${myResume.educationWork[0].completed} with ${myResume.educationWork[0].cgpa} cgpa. 
     Her work experience includes ${myResume.educationWork[1].firstJob} and ${myResume.educationWork[1].secondJob} . 
    Her interest includes ${myResume.interest.list}. `;
    console.log(stat1);
