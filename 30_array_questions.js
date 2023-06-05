const products = [
  { id: 1, name: 'Product 1',quantity:3, price: 20 },
  { id: 2, name: 'Product 2',quantity:3, price: 50 },
  { id: 3, name: 'Product 3',quantity:3, price: 80 },
  { id: 4, name: 'Product 4',quantity:3, price: 30 },
  { id: 5, name: 'Product 5',quantity:3, price: 60 },
]

const users = [
  { id: 1, name: 'John', age: 25, score: 80 },
  { id: 2, name: 'Alice', age: 30, score: 90 },
  { id: 3, name: 'Bob', age: 35, score: 75 },
  { id: 4, name: 'Sarah', age: 28, score: 85 },
  { id: 5, name: 'Michael', age: 32, score: 95 },
]

const countries = ['USA', 'Canada', 'Australia', 'Germany', 'Japan']

const blogPosts = [
  { id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet' },
  { id: 2, title: 'Post 2', content: 'Consectetur adipiscing elit' },
  { id: 3, title: 'Post 3', content: 'Sed do eiusmod tempor incididunt' },
  { id: 4, title: 'Post 4', content: 'Ut labore et dolore magna aliqua' },
  { id: 5, title: 'Post 5', content: 'Excepteur sint occaecat cupidatat' },
]

const numbers = [10, 20, -5, 30, -15, 25, 5, -10]

const transactions = [
  { id: 1, amount: 100, type: 'debit' },
  { id: 2, amount: 50, type: 'credit' },
  { id: 3, amount: 200, type: 'credit' },
  { id: 4, amount: 75, type: 'debit' },
  { id: 5, amount: 150, type: 'debit' },
];

const tasks = [
  { id: 1, description: 'Task 1', completed: true },
  { id: 2, description: 'Task 2', completed: false },
  { id: 3, description: 'Task 3', completed: true },
  { id: 4, description: 'Task 4', completed: false },
  { id: 5, description: 'Task 5', completed: true },
]

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publicationYear: 2010 },
  { id: 2, title: 'Book 2', author: 'Author 2', publicationYear: 2005 },
  { id: 3, title: 'Book 3', author: 'Author 3', publicationYear: 2015 },
  { id: 4, title: 'Book 4', author: 'Author 4', publicationYear: 2008 },
  { id: 5, title: 'Book 5', author: 'Author 5', publicationYear: 2020 },
]

const movies = [
  { id: 1, title: 'Movie 1', rating: 7.8 },
  { id: 2, title: 'Movie 2', rating: 8.2 },
  { id: 3, title: 'Movie 3', rating: 6.5 },
  { id: 4, title: 'Movie 4', rating: 7.1 },
  { id: 5, title: 'Movie 5', rating: 8.9 },
]

let customers = [
  { id: 1, name: 'Customer 1',age:40, totalSpent: 100 },
  { id: 2, name: 'Customer 2',age:40, totalSpent: 200 },
  { id: 3, name: 'Customer 3',age:30, totalSpent: 150 },
  { id: 4, name: 'Customer 4',age:20, totalSpent: 300 },
  { id: 5, name: 'Customer 5', totalSpent: 250 },
]

const employees = [
  { id: 1, name: 'Employee 1', salary: 5000 },
  { id: 2, name: 'Employee 2', salary: 6000 },
  { id: 3, name: 'Employee 3', salary: 5500 },
  { id: 4, name: 'Employee 4', salary: 7000 },
  { id: 5, name: 'Employee 5', salary: 4500 },
]

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry','hi','hello']

//1. Given an array of products, how would you find the total number of products in the array?
console.log(products.length)

//2. How would you filter out all the products with a price greater than $50 from an array of products?
const filterdProducts = products.filter(x=> x.price>50)
console.log(filterdProducts)

//3. Suppose you have an array of user objects. How would you find the average age of all users?
const aveAge = users.map(x=>x.age).reduce((prev,next)=>prev + next/users.length,0)
console.log(aveAge)

//4. How would you find the user with the highest score from an array of user objects?
const highestScore = Math.max(...users.map(x=> x.score))
console.log(highestScore)

//5. Given an array of strings representing countries, how would you check if a specific(usa) country is present in the array?
// const country = countries.find(x=>x ==='USA' || x === 'usa')
// const country = countries.includes('USA')
const country = countries.indexOf('USA')
console.log(countries[country])

//6. Suppose you have an array of blog post objects. How would you retrieve an array of titles for all the blog posts?
const titles = blogPosts.map(x=>x.title)
console.log(titles)
//7. How would you remove duplicates from an array of numbers?
// const unique = new Set([...numbers])
const unique = numbers.map((x,i,arr)=> arr.indexOf(x) === i)
console.log(unique)
//8. Given an array of transactions, how would you calculate the total revenue generated from those transactions?
const revenue = transactions.filter(x=> x.type==='credit').map(x=>x.amount).reduce((prev,next) => prev + next,0)
console.log(revenue)

//9. Suppose you have an array of student objects with a "grade" property. How would you find the student with the highest grade?
//filter the array on grades and than apply math.max()

//10 How would you sort an array of strings in alphabetical order?
console.log(strings.sort((a,b)=>{
  return a>b?1:-1
}))

//11. Given an array of numbers, how would you find the sum of all positive numbers in the array?
const sumofAllPositive = numbers.filter(x=>x>=0).reduce((prev,next)=>prev+next)
console.log(sumofAllPositive)

// 12. Suppose you have an array of book objects with "author" and "publicationYear" properties. How would you sort the books by publication year in ascending order
const booksInAscending = books.map(x=>x.publicationYear).sort()
console.log(booksInAscending)

//13. How would you find the index of the first occurrence of a specific element in an array?
// array.indexOf(element)

//14. Given an array of tasks with a "completed" property, how would you count the number of completed tasks?
const completedTasks = tasks.map(x=>x.completed).length
console.log(completedTasks)

//15. Suppose you have an array of customer objects with a "totalSpent" property. How would you find the customer who spent the most?
const maxSpent = Math.max(...customers.map(x=>x.totalSpent))
const spentMostUser = customers.find(x=>x.totalSpent === maxSpent)
console.log(maxSpent,spentMostUser)

//16. How would you check if all elements in an array satisfy a specific condition?
console.log(numbers,numbers.some(x=> x>5)) //some and every func

//17. Given an array of numbers, how would you find the smallest number in the array?
console.log(Math.min(...numbers))

//18. Suppose you have an array of product objects with "quantity" and "price" properties. How would you calculate the total cost of all products?
const totalCost = products.map(x=>x.price * x.quantity).reduce((prev,next)=>prev +next,0)
console.log(totalCost)

//19. How would you convert an array of strings to a single string with all the elements concatenated?
const newString = strings.join('')
console.log(newString)

//20. Given an array of user objects, how would you find the user with the longest name?
const longestName = users.map(x => x.name).reduce((p, n) => {
  if (p.length > n.length) {
    return p;
  } else {
    return n;
  }
});
console.log(longestName);

//21. Suppose you have an array of movie objects with a "rating" property. How would you find the movie with the highest rating?
const highestRatings = Math.max(...movies.map(x=>x.rating))
console.log(highestRatings)

//22. How would you reverse the order of elements in an array?
const reversed = [...numbers].reverse()
console.log(numbers,reversed)

//23. Given an array of strings, how would you find the longest string in the array?
const longestString = strings.reduce((p,n)=>p.length>n.length?p:n)
console.log(longestString)

//24. Suppose you have an array of customer objects with "age" and "gender" properties. How would you filter out all male customers above the age of 40?
customers = customers.map(x=>({...x,gender:'male'})) // adding a key to all obj inside []
const maleFiltered = customers.filter(x=>x.age === 40)
console.log(maleFiltered)

//25. How would you check if any element in an array satisfies a specific condition?
// arr.some(x=>x.condtion)

//26. Given an array of numbers, how would you find the average value of the numbers?
const aveNumber = numbers.reduce((prev,next)=>prev+next/ numbers.length,0)
console.log(aveNumber)

//27. Suppose you have an array of employee objects with a "salary" property. How would you find the employee with the highest salary?
const highestSalary =  Math.max(...employees.map(x=>x.salary))
console.log(highestSalary)

//28. How would you remove a specific element from an array of objs? remove item id is 3 form customer arr
const filteredArray = customers.filter(x=>x.id !== 3)
console.log(filteredArray)

//29. Given an array of strings, how would you find the number of strings that start with a s letter?
const startsWith = strings.filter(x=>x.startsWith('h'))
console.log(startsWith)

//30. Suppose you have an array of product objects with "quantity" and "price" properties. How would you sort the products by price in descending order?
const descendingOrder = products.map(x=>x.price).sort((a,b)=>a>b?-1:1)
console.log(descendingOrder)
