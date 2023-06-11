const users = [
    { id: 1, name: "John", age: 25, score: 80, hobbies: ["Reading", "Soccer"], address: { city: "New York", country: "USA" } },
    { id: 2, name: "Sarah", age: 32, score: 90, hobbies: ["Painting", "Cooking"], address: { city: "London", country: "UK" } },
    { id: 3, name: "Michael", age: 28, score: 70, hobbies: ["Gardening", "Photography"], address: { city: "Sydney", country: "Australia" } },
    { id: 3, name: "usman", age: 28, score: 80, hobbies: ["Gardening", "Photography"], address: { city: "Sydney", country: "Australia" } },
    { id: 4, name: "Emily", age: 60, score: 50, hobbies: ["Dancing", "Hiking"], address: { city: "Paris", country: "France" } },
    { id: 5, name: "David", age: 35, score: 95, hobbies: ["Guitar", "Traveling"], address: { city: "Tokyo", country: "Japan" } },
    { id: 6, name: "Jessica", age: 29, score: 75, hobbies: ["Yoga", "Movies"], address: { city: "Berlin", country: "Germany" } },
    { id: 7, name: "Andrew", age: 31, score: 88, hobbies: ["Swimming", "Chess"], address: { city: "Toronto", country: "Canada" } },
    { id: 8, name: "Sophia", age: 27, score: 92, hobbies: ["Painting", "Cooking"], address: { city: "Rome", country: "Italy" } },
    { id: 9, name: "Daniel", age: 24, score: 83, hobbies: ["Photography", "Hiking"], address: { city: "Cairo", country: "Egypt" } },
    { id: 10, name: "Olivia", age: 30, score: 87, hobbies: ["Reading", "Soccer","Reading", "Soccer"], address: { city: "Rio de Janeiro", country: "Europe" } },
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
const outsideEuope = users.filter(x=>x.address.country !=='Europe')
// console.log(outsideEuope)

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

//16. How many users are from cities with a name longer than 5 characters?
const citiesLonger_5 = users.filter(x=>x.address.city.length> 5)
console.log('16',citiesLonger_5)

//17. What is the average score of users from Europe?
const fromEurope = users.filter(x=>x.address.country === 'Europe')
const aveScore = fromEurope.reduce((p,n)=>p+n.score/fromEurope.length,0)
console.log('17',aveScore)

// 18. How many users have an age greater than their score?
const ageGreater = users.filter(x=>x.age > x.score)
console.log('18',ageGreater)

// 19. Which user has the highest score and lives in a city with a name longer than 7 characters?
const citiesLonger_7 = users.filter(x=>x.address.city.length> 7).sort((a,b)=>b.score-a.score)[0]
console.log('19',citiesLonger_7)

// 20. How many users have more than one hobby?
const moreThanOneHoby = users.filter(x=>x.hobbies.length>1)
console.log('20',moreThanOneHoby)

// 21. Which user has the highest score among users under the age of 25?
const under_25 = users.filter(x=>x.age<25)
const scoreUnder_25 = under_25.sort((a,b)=>b.score - a.score)[0]
console.log("21",scoreUnder_25)

// 22. How many users have a name that starts with the letter "J"?
const nameStartsWithJ = users.filter(x=>x.name.startsWith('J'))
console.log('22',nameStartsWithJ)

// 23. Which user has the highest score and lives in a country starting with the letter "U"?
const nameStartsWithU = users.filter(x=>x.address.country.startsWith('U'))
const topScorer = nameStartsWithU.sort((a,b)=>b.score - a.score)[0]
console.log('22',topScorer)

// 24. How many users have an age that is a multiple of 3?
const ageMultiple_3 = users.filter(x=>x.age%3===0).length
console.log("24",ageMultiple_3)

// 25. Which user has the highest score and lives in a city that starts with the letter "R"?
const nameStartsWithR = users.filter(x=>x.address.city.startsWith('R'))
const topScorerWithR = nameStartsWithR.sort((a,b)=>b.score - a.score)[0]
console.log('25',topScorerWithR)

// 26. How many users have a name longer than 6 characters and an age less than 30?
const nameLonger_6 = users.filter(x=>x.name.length>6 && x.age<30)
console.log("26",nameLonger_6)

// 27. Which user has the lowest score among users over the age of 30?
const above_30 = users.filter(x=>x.age>30).sort((a,b)=>a.score - b.score)[0]
console.log('27',above_30)

// 28. How many users have a hobby that contains the word "Gardening"?
const hobbyGardening = users.filter(x=>x.hobbies.includes('Gardening'))
console.log('28',hobbyGardening)

// 29. Which user has the highest combined length of their hobbies?
const hobbiesLength = Math.max(...users.map(x=>x.hobbies.length))
const userWithMostHobbies = users.filter(x=>x.hobbies.length === hobbiesLength)
console.log('28',userWithMostHobbies)
// 30. How many users have a score that is a prime number?
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    const sqrtNum = Math.sqrt(num);

    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const primeScoreCount = users.filter(x => isPrime(x.score)).length
console.log("30",primeScoreCount)


