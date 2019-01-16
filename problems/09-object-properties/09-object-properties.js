/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    
    for (const key in someObj) {
        if (someObj.hasOwnProperty(key)) {
            console.log(someObj[key]);
            
        }
    }
}

let person=[{
    location: 'tampa', age: '35'},
    {location: 'tampa', age: '45'}];

    objectProperties(person);