const products = [
    { id: 1, name: 'Product 1', quantity: 5, price: 10 },
    { id: 2, name: 'Product 2', quantity: 2, price: 20 },
    { id: 3, name: 'Product 3', quantity: 8, price: 30 },
    { id: 4, name: 'Product 4', quantity: 3, price: 40 },
    { id: 5, name: 'Product 5', quantity: 6, price: 50 },
    { id: 6, name: 'Product 6', quantity: 4, price: 60 },
    { id: 7, name: 'Product 7', quantity: 7, price: 70 },
    { id: 8, name: 'Product 8', quantity: 1, price: 80 }
];

const users = [
    { id: 1, name: 'User 1', age: 25, score: 80 },
    { id: 2, name: 'User 2', age: 30, score: 90 },
    { id: 3, name: 'User 3', age: 35, score: 75 },
    { id: 4, name: 'User 4', age: 28, score: 85 },
    { id: 5, name: 'User 5', age: 32, score: 95 },
    { id: 6, name: 'User 6', age: 27, score: 70 },
    { id: 7, name: 'User 7', age: 33, score: 88 },
    { id: 8, name: 'User 8', age: 29, score: 92 }
];

const countries = ['USA', 'Canada', 'Australia', 'Germany', 'Japan', 'France', 'Spain', 'Italy'];

const blogPosts = [
    { id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Post 2', content: 'Consectetur adipiscing elit' },
    { id: 3, title: 'Post 3', content: 'Sed do eiusmod tempor incididunt' },
    { id: 4, title: 'Post 4', content: 'Ut labore et dolore magna aliqua' },
    { id: 5, title: 'Post 5', content: 'Excepteur sint occaecat cupidatat' },
    { id: 6, title: 'Post 6', content: 'Amet consectetur adipisicing elit' },
    { id: 7, title: 'Post 7', content: 'Adipisicing elit sed do eiusmod' },
    { id: 8, title: 'Post 8', content: 'Tempor incididunt ut labore' }
];

const numbers = [10, 20, -5, 30, -15, 25, 5, -10];

const transactions = [
    { id: 1, amount: 100, type: 'debit' },
    { id: 2, amount: 50, type: 'credit' },
    { id: 3, amount: 200, type: 'credit' },
    { id: 4, amount: 75, type: 'debit' },
    { id: 5, amount: 150, type: 'debit' },
    { id: 6, amount: 300, type: 'credit' },
    { id: 7, amount: 125, type: 'credit' },
    { id: 8, amount: 250, type: 'debit' }
];



//1. Find the product(s) with the lowest quantity in stock.
const lowestInStock = Math.min(...products.map(x=>x.quantity))
console.log(lowestInStock)

//2. Calculate the total value of each product (quantity * price) and return an array with the values.
const valueOfEeachProduct = products.map(x=>x.quantity * x.price)
console.log(valueOfEeachProduct)
//3. Find the user(s) with the highest score, but only consider users under the age of 30.
// const h_score = Math.max(...users.map((x=>x.score)))

const userUnder_30 = users.filter(x=>x.age<30 && x).sort((a,b)=>b.score - a.score)[0]
console.log('1:',userUnder_30)
//4. Check if all products have a quantity greater than zero.
console.log(products.every(x=>x.quantity > 0))
//5. Calculate the average price of products with a quantity greater than 2.
const filteredProducts =products.filter(x=>x.quantity>2)
const avePrice = filteredProducts.reduce((total, product, _, arr) => {
    // console.log(total,product);
    return total + product.price / arr.length;
}, 0);
console.log(avePrice)

//5. Find the user(s) who have spent the most in total (totalSpent), excluding users with a score below 80.
//filter array : score<80 , now find the min from this array

//6. Return the names of all users who have both a score greater than 90 and an age less than 30.
const newUsers= users.filter(({age, name, score})=>{
    if(score>90 && age < 30) {
        return name
    }
}).map(x=>x.name)
console.log(newUsers,'new Users')

//7. Remove the product with the highest price from the array.
// const heighestPriced  = products.sort((a,b)=>a.price<b.price?1:-1)[0] //mutated original arr
const maxPrice = Math.max(...products.map(x=>x.price))
const removedOne = products.filter(x=> x.price !== maxPrice)
console.log(removedOne, maxPrice)

//8. Find the average price of all products that have a quantity between 1 and 5 (inclusive).
const avePriceOfAllProducts = products.filter(x=>x.quantity>0 && x.quantity<6).reduce((total,prod,_,arr)=>total+prod.price/arr.length,0)
console.log(avePriceOfAllProducts)

//9. Return the number of users who have a score above the average score.
const aveScore =  Math.floor(users.map(x=>x.score).reduce((tot,prod,_,arr)=>tot + prod/arr.length,0))
const aboveAveScore = users.filter(x=>x.score>aveScore)
console.log(aveScore,aboveAveScore)

//10. Calculate the total quantity of all products with a price below 50.
const totalQuantity = products.filter(x=>x.price<50).reduce((x,y)=>x+ y.quantity,0)
console.log(totalQuantity)

// Find the product(s) with a quantity greater than the average quantity.
//     Return the name of the user who has made the most transactions (transactions.length).
//     Find the product(s) with the highest total value (quantity * price).
//     Check if any user has both a score greater than 90 and a name that starts with the letter "J".
//     Return the name(s) of the user(s) who have made the fewest transactions.
//     Calculate the sum of all the prices for products that have a quantity of 1.
// Find the product(s) with a price that is a multiple of 10.
// Return the name(s) of the user(s) who have the highest total spent per transaction (totalSpent / transactions.length).
//     Calculate the sum of the quantities for all products with a price above the average price.
//     These questions should provide a challenge and test your understanding of the functions and data manipulation. Good luck! Let me know if you need any further assistance.
