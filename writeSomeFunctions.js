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
// 11. Implement a function that checks if a given number is a prime number.
// 12. Write a function to find the most frequent element in an array.
// 13. Create a function that converts a number to its corresponding Roman numeral.
// 14. Implement a function that removes falsy values (false, null, 0, "", undefined, and NaN) from an array.
// 15. Write a function that returns the sum of all numbers in an array.
// 16. Create a function that finds the longest word in a sentence.
// 17. Implement a function that checks if two strings are anagrams.
// 18. Write a function that reverses the order of words in a sentence.
// 19. Create a function that generates a random password with a specified length and complexity.
// 20. Implement a function that finds the intersection of two arrays (common elements).
