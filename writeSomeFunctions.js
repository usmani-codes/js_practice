// day-3 : JS Practice .
// 1. Write a function to capitalize the first letter of each word in a given string.
let str = 'muhammad Usman is my name'
const string = 'Usman'
function capitalize(str) {
  const upperCase = str.split(' ')
  return upperCase.map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
}
const a = capitalize(str)
// console.log(a)

// 2. Implement a function that checks if a given string is a palindrome.
const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('')
  if (str === reversedStr) console.log('yes the string is palindrome: ', str)
  else console.log("no it's not a palindrome")
}
isPalindrome(string)
// 3. Write a function that counts the occurrences of each element in an array and returns the count as an object.
const words = ['usman', 'pakistan', 'pakistan', 'usman', 'hello world']
const dictionary = (words) => {
  const obj = {}
  words.map((x) => {
    obj[x] = (obj[x] || 0) + 1 //obj[x] means a key : if a key does not exist add 0 as its value and if it exists add 1 to its value
  })
  return obj
}
console.log(dictionary(words))
// 4. Create a function that calculates the factorial of a given number.
const factorial = (n) => {
  if (n === 0 || n === 1) return 1
  else return n * factorial(n - 1)
}
console.log(factorial(5))
// 5. Implement a function that removes duplicates from an array.
const removeDuplicate = (str) => Array.from(new Set([...str]))
console.log(removeDuplicate(words))
// 6. Write a function that flattens a nested array into a single level array.
// 7. Create a function to find the maximum and minimum values in an array.
const maxMin = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return { max, min }
}

const { max, min } = maxMin([1, 2, 3, 5, 5, 60])
console.log(max, min)
// 8. Implement a function that checks if two arrays are equal (have the same elements in the same order).
// 9. Write a function that sorts an array of objects based on a specified property. (based on name e.g)
const sortMe = (arr, prop) => {
  return arr.sort((a, b) => {
    return b[prop] < a[prop] ? 1 : -1
  })
}
const sorted = sortMe([{ name: 'imran' }, { name: 'abdullah' }], 'name')
console.log(sorted)
// 10. Create a function that generates a random alphanumeric string of a given length.
const randomString = (len) => {
  const alphanumericChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i <= len; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length)
    result += alphanumericChars[randomIndex]
  }
  console.log(result)
}
randomString(30)

// 11. Implement a function that checks if a given number is a prime number.
const isPrime = (number) => {
  if (number <= 1) return `No: ${number} is not a prime number`
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return `No: ${number} is not a prime number`
  }
  return `yes: ${number} is a prime number`
}

console.log(isPrime(5))
// 12. Write a function to find the most frequent element in an array.
const mostFrequent = (arr) => {
  let frequent = {}

  arr.forEach((x) => {
    frequent[x] = (frequent[x] || 0) + 1
  })

  let value = 0
  let mostFrequent = {}

  for (const key in frequent) {
    if (frequent[key] > value) {
      value = frequent[key]
      mostFrequent = key
    }
  }

  return `most Frequent is: ${mostFrequent}`
}

console.log(mostFrequent(['hello', 'hello', 'gee', 'one']))
// 13. Create a function that converts a number to its corresponding Roman numeral.
const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ]

  let result = ''

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral
      num -= value
    }
  }

  return result
}

console.log(convertToRoman(2023))

// 14. Implement a function that removes falsy values (false, null, 0, "", undefined, and NaN) from an array.
const removeFalsyValues = (arr) => arr.filter(Boolean)

const array = [false, null, 0, '', undefined, NaN, 'Hello', 42]
const filteredArray = removeFalsyValues(array)

console.log(filteredArray)

// 15. Write a function that returns the sum of all numbers in an array.
const numArray = [5, 6, 0, 7, 8, 90, 8, 99, 9, 9]
const sumofAllItems = numArray.reduce((prev, next) => prev + next, 0)
console.log(sumofAllItems, 'sum of all')

// 16. Create a function that finds the longest word in a sentence.
const sentence = 'the longest word'

const findTheLongestWord = (sentence) => {
  let longestWord = sentence.split(' ')[0]

  console.log(sentence.split(' ')[0])
  sentence.split(' ').map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord

  // const arr = sentence.split(' ')
  // let longest = arr[0]

  // arr.map((word) => {
  //   if (word.length > longest.length) {
  //     longest = word
  //   }
  // })

  // return longest
}

console.log(findTheLongestWord(sentence))
// 17. Implement a function that checks if two strings are anagrams.
// 18. Write a function that reverses the order of words in a sentence.
const reverseOrder = (sen) => sen.split(' ').reverse().join(' ')
console.log(reverseOrder(sentence))
// 19. Create a function that generates a random password with a specified length and complexity.
const generatePass = (len) => {
  const str = 'hello world, you may write a to z and from to 0 to 9 and 9 to 0'
  let pass = ''
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * str.length)
    if (str[index] == ' ') {
      pass += 'E'
      continue
    }
    pass += str[index]
  }
  return pass
}
const myPass = generatePass(8)
console.log(myPass)
// 20. Implement a function that finds the intersection of two arrays (common elements).
