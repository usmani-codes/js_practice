const users = [
    { id: 1, name: "John", age: 25, score: 80, hobbies: ["Reading", "Soccer"], address: { city: "New York", country: "USA" } },
    { id: 2, name: "Sarah", age: 32, score: 90, hobbies: ["Painting", "Cooking"], address: { city: "London", country: "UK" } },
    { id: 3, name: "Michael", age: 28, score: 70, hobbies: ["Gardening", "Photography"], address: { city: "Sydney", country: "Australia" } },
    { id: 3, name: "usman", age: 28, score: 80, hobbies: ["Gardening", "Photography"], address: { city: "Sydney", country: "Australia" } },
    { id: 4, name: "Emily", age: 21, score: 85, hobbies: ["Dancing", "Hiking"], address: { city: "Paris", country: "France" } },
    { id: 5, name: "David", age: 35, score: 95, hobbies: ["Guitar", "Traveling"], address: { city: "Tokyo", country: "Japan" } },
    { id: 6, name: "Jessica", age: 29, score: 75, hobbies: ["Yoga", "Movies"], address: { city: "Berlin", country: "Germany" } },
    { id: 7, name: "Andrew", age: 31, score: 88, hobbies: ["Swimming", "Chess"], address: { city: "Toronto", country: "Canada" } },
    { id: 8, name: "Sophia", age: 27, score: 92, hobbies: ["Painting", "Cooking"], address: { city: "Rome", country: "Italy" } },
    { id: 9, name: "Daniel", age: 24, score: 83, hobbies: ["Photography", "Hiking"], address: { city: "Cairo", country: "Egypt" } },
    { id: 10, name: "Olivia", age: 30, score: 87, hobbies: ["Reading", "Soccer"], address: { city: "Rio de Janeiro", country: "Europe" } },
];


//1. What is the name of the user with the highest score?
const highestScore = Math.max(...users.map(x=>x.score))
const user = users.filter(x=>x.score === highestScore).map(x=>x.name)
console.log(user)

//2. What is the city of residence for Sarah?
const citySarah = users.filter(x=>x.name ==='Sarah').map(x=>x.address.city)
console.log(citySarah)

//3. How many hobbies does John have?
const johnHobbies = users.filter(x=>x.name==='John').map(x=>x.hobbies)
console.log(johnHobbies)

//4. Which user has the lowest score?
const lowestScore = Math.min(...users.map(x=>x.score))
const userWithLowest = users.filter(x=>x.score === lowestScore)
console.log(userWithLowest)

//5. How many users are from countries outside of Europe?
const outsideEuuope = users.filter(x=>x.address.country !=='Europe')
// console.log(outsideEuuope)

//6. What is the average age of all users?
const aveAge = users.reduce((prev,next)=>prev + next.age/ users.length,0)
console.log(aveAge)

//7. Which user has the longest name?
const names = users.map(x=>x.name)
let longestName = names[0]

for (let n  of names) {
    if (n.length > longestName.length) longestName = n
}
console.log(longestName)

//8.How many users have a score greater than 80?
const above_80 = users.filter(x=>x.score>80).length
console.log(above_80)

//9. Which user is the oldest?
const oldestAge = Math.max(...users.map(x=>x.age))
const oldest = users.filter(x=>x.age === oldestAge)
console.log(oldest)

//10. How many users have the hobby of "Cooking"?
const hobyCooking = users.filter(x=>x.hobbies.includes('Cooking'))
console.log('10',hobyCooking)

//11. What is the country of residence for the user with the lowest score?
const lowestCountry = users.filter(x=>x.score === lowestScore).map(x=>x.address.country)
console.log(lowestCountry)

//12. How many users have an age between 25 and 30 (inclusive)?
const age_25_30 = users.filter(x=>x.age >=25 && x.age<=30 )
console.log(age_25_30)

//13. Which user has the highest score and lives in Australia?
const livesAustralia = users.filter(x=>x.address.country === 'Australia')
    .sort((a,b)=>b.score - a.score)[0]
console.log('13',livesAustralia)

//14. How many users have the hobby of "Reading" or "Soccer"?
const readingOrSoccer = users.filter(x=>x.hobbies.includes('Reading') || x.hobbies.includes(('Soccer')))
console.log('14',readingOrSoccer)

//15.Which user has the shortest name?
let shortestName = names[0]

for (let n  of names) {
    if (n.length < shortestName.length) shortestName = n
}
console.log('15',shortestName)

//How many users are from cities with a name longer than 5 characters?
//     What is the average score of users from Europe?
//     How many users have an age greater than their score?
//     Which user has the highest score and lives in a city with a name longer than 7 characters?
//     How many users have more than one hobby?
//     Which user has the highest score among users under the age of 25?
//     How many users have a name that starts with the letter "J"?
//     Which user has the highest score and lives in a country starting with the letter "U"?
//     How many users have an age that is a multiple of 3?
//     Which user has the highest score and lives in a city that starts with the letter "R"?
//     How many users have a name longer than 6 characters and an age less than 30?
//     Which user has the lowest score among users over the age of 30?
//     How many users have a hobby that contains the word "Gardening"?
//     Which user has the highest combined length of their hobbies?
//     How many users have a score that is a prime number?
