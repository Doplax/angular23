import { Product, taxCalculation } from "./06-functions-destructuring";


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 1,
    },
    {
        description: 'iPad',
        price: 150
    }
]

const [total, tax] = taxCalculation({
    products:shoppingCart,
    tax:45
});

console.log(total);
console.log(tax);