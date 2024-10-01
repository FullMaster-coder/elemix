import {addProduct} from "./requests.js";

// Функция для добавления только мужских продуктов
export const addProductsMensCategory = async () => {
    const products = [
        {
            name: "Chino Shorts",
            currentPrice: 24.00,
            categories: "men",
            type: "shorts",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/shorts-2-2-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/shorts-2-1-760x970.jpg",
            ],
            quantity: 100,
            sizes: "M, L", // Добавьте размеры при необходимости
            description: "Cotton sweatshirt with a lined hood with drawstring and wrapover front. Kangaroo pocket, long sleeves, and ribbing at cuffs and hem."
        },
        {
            name: "Black T-shirt",
            currentPrice: 14.00,
            categories: "men",
            type: "t-shirt",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/t-shirt-2-1-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/t-shirt-1-1-760x970.jpg",
            ],
            quantity: 245,
            color: "black",
            description: "Cotton sweatshirt with a lined hood with drawstring and wrapover front. Kangaroo pocket, long sleeves, and ribbing at cuffs and hem."
        },
        {
            name: "Joggers",
            currentPrice: 39.99,
            categories: "men",
            type: "joggers",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/t-shirt-2-1-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/t-shirt-1-1-760x970.jpg",
            ],
            quantity: 245,
            color: "brown, black", // Опять же, один цвет
            sizes: "S, M, L, XL",
            description: "Joggers in woven fabric. Elasticized waistband with concealed drawstring and mock fly. Side pockets with zipper and welt back pockets. Legs with creases and sewn foldover cuffs."
        },
        {
            name: "Bomber Jacket",
            currentPrice: 59.00,
            categories: "men",
            type: "jacket",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/hoodie-2-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/hoodie-1-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/hoodie-3-760x970.jpg",
            ],
            quantity: 100,
            color: "brown, black",
            sizes: "XSS, S, M, L, XL",
            description: "Jacket featuring a high neck, long sleeves with elastic cuffs, welt pockets at the hip, inside pocket detail, matching ribbed hem and zip-up front."

        },
        {
            name: "Hoodie",
            currentPrice: 19.99, // Новая цена со скидкой
            previousPrice: 24.45, // Старая цена (до скидки)
            categories: "men",
            type: "hoodie",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/hoodie-2-2-150x150.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/hoodie-2-1-150x150.jpg",
            ],
            quantity: 0,
            description: "Cotton sweatshirt with a lined hood with drawstring and wrapover front. Kangaroo pocket, long sleeves, and ribbing at cuffs and hem."

        },
        {
            name: "Polo Shirt",
            currentPrice: 24.90,
            categories: "men",
            type: "t-shirt",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/polo-2-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/polo-3-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/polo-1-760x970.jpg",
            ],
            quantity: 50,
            sizes: "XSS, S, M, L, XL",
            description: "Polo shirt featuring a shirt collar, short sleeves with ribbed cuffs, side vents at the hem and a henley button placket."

        },

        {
            name: "Embroidered Belt Bag",
            currentPrice: 17.99,
            categories: "men",
            type: "bags",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/bag-2-150x150.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/bag-1-760x970.jpg",

            ],
            quantity: 50,
            description: "A stylish, embroidered belt bag for hands-free convenience. Perfect for essentials with an adjustable strap for versatile wear. Ideal for everyday use or travel."

        },
        {
            name: "3-pack Necklaces",
            currentPrice: 19.99,
            categories: "men",
            type: "Accessories",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/neaklaces-2-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/neaklaces-1-760x970.jpg",
            ],
            quantity: 70,
            description: "A versatile set of three necklaces to elevate any look. Layer them together or wear separately for effortless style. Perfect for any occasion."

        },
        {
            name: "Leather Sandals",
            currentPrice: 39.00,
            categories: "men",
            type: "Shoes",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/sandals-2-1-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/sandals-2-2-760x970.jpg",
            ],
            quantity: 245,
            description: "Comfortable and stylish leather sandals, perfect for any casual outfit. Durable design with a sleek finish for everyday wear."

        },

        {
            name: "Oval Sunglasses",
            currentPrice: 14.00,
            categories: "men",
            type: "Accessories",
            imageUrls: [
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/sunglasses-4-3-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/sunglasses-4-1-760x970.jpg",
                "https://elemix.pixel-show.com/wp-content/uploads/2019/05/sunglasses-4-2-760x970.jpg",
            ],
            quantity: 50,
            description: "Sleek and stylish men's oval sunglasses. Offering UV protection and a modern design, perfect for daily wear and outdoor activities."

        },
    ];

    // Фильтрация по категории "men"
    const menProducts = products.filter(product => product.categories === "men");

    const productsPromise = menProducts.map((product) => addProduct(product));

    await Promise.all(productsPromise);
    console.log('Men category products added');
};
