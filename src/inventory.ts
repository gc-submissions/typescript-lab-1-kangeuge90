import { Product } from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory : InventoryItem[] = [
    {
        name: "motor",
        price: 10.00,
        quantity: 10;
    },
    {
        name: "sensor",
        price: 12.50,
        quantity: 4;
    },
    {
        name: "LED",
        price: 1.00,
        quantity: 20;
    },
]
    
function calcIventoryValue()