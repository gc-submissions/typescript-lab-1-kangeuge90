export interface Product {
    name: string;
    price: number;
}

const products : Product[] = {
    {
        name: "Hiking Boots",
        price: 150,
    },
    {
        name: "Helmet",
        price: 80,
    },
    {
        name: "Carabiner",
        price: 50,
    },
};

export function calcAverageProductPrice(products : Product[]) : number ?? 0 {
let sum : number = 0;
for (const product of products) {
    return sum += product.price
}
let average : number = (sum / (products.length))
return average
}

const productsAveragePrice = calcAverageProductPrice(products);
console.log(productsAveragePrice)