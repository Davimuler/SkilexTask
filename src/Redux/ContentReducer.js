

let InitialState = {

    productsData: [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "category": "Electronics",
            "brand": "Sony",
            "price": 99.99,
            "rating": 4.5,
            "imageUrl": "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg"
        },
        {
            "id": 2,
            "name": "Bluetooth Speaker",
            "category": "Electronics",
            "brand": "JBL",
            "price": 49.99,
            "rating": 4.0,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s"
        },
        {
            "id": 3,
            "name": "Running Shoes",
            "category": "Footwear",
            "brand": "Nike",
            "price": 59.99,
            "rating": 4.2,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDyBXEdHPiZOMabEtZkF6iZGLQpI-ROP9HQ&s"
        },
        {
            "id": 4,
            "name": "Smartphone",
            "category": "Electronics",
            "brand": "Samsung",
            "price": 499.99,
            "rating": 4.8,
            "imageUrl": "https://nout.am/media/catalog/product/cache/001b11e62ffaf4e07b55f9bea18e7ffd/S/M/SM71681274_1.jpg"
        },
        {
            "id": 5,
            "name": "Leather Jacket",
            "category": "Clothing",
            "brand": "Levi's",
            "price": 199.99,
            "rating": 4.7,
            "imageUrl": "https://i.ebayimg.com/images/g/gwIAAOSwwbBkDniW/s-l1200.jpg"
        },
        {
            "id": 6,
            "name": "Laptop",
            "category": "Electronics",
            "brand": "Dell",
            "price": 799.99,
            "rating": 4.6,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos0YvXMjH04jCStDXEYnsj4MG7YX8BDZPrQ&s"
        },
        {
            "id": 7,
            "name": "Digital Camera",
            "category": "Photography",
            "brand": "Canon",
            "price": 299.99,
            "rating": 4.4,
            "imageUrl": "data:image/jpeg;base64,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4+jce0Td7Gpv4rBG965AHmfRT5yu7cZBEwW2HpnMLg8V37iNeOhI1vvPGXeE5Z1UIPONcEMCRmN1XIDfLqcpt2ypxOy3Xx037iRa/cTa/mmj2B+q3oMCzrco7s7XbM+rEaEnMHvu06Sg7xulVV2m3uAF7eu30d17dkyXAH3jee49c3rss+6KoPSfqPpgVY1NzrL/AGa2SzEdIeKOpe3tPAenhNdPC01PRBYjrY6fRfqkgDW+nmlG6lTqVXAUM7sbBVBZj2ADUmWC7DxIDscPiAKd+cJoVAKdlDnOcvR6LBteog7jMdh7RFBnOTMHpvSYZspyuBcq1jlOltxBBItqZPxW21cvko06S1XzVRTIUugIK0lIWyIABoF1bpG+gBUCtgaiDp06iAHKcyMtmyhsuoGuVgbcCDPnk/P65P29ts4o0iyhebTm1AdioQMSgAbcQpCk3JbKCdZX5vE8/rMD1BRPRXuHqmc14fxF/ZHqmyRCIiAiIgIiICIiBzW2eQWzsU7VK2GU1G8Z0d6bE8SabC57TKv2pdk+QqfKq/253MQOH9qbZPkKvyqv9uffan2V5Gr8qr/bnbxA4lfBTsofoanymv8AbgeCrZXkKnyrEfeTtogcYvgs2SP/AKz+fFYn72bx4N9lfBV+Nq/bnWRA5P2ttlfBF+Nq/bg+DXZXwRfjav251kQOUp+DjZi3y4dlvvy4nEKD32qazBvBpsom5wx+UYj7yddEDj/ax2V8HbzYrEj/AJZh7VeyPgz/ACvFfezs4gcZ7Veyfgz/ACvE/ez57Veyfg9T5XifvZ2kQOL9qzZPkKnyvE/eT77VuyvIVPleJ+8nZxA4z2rdleQqfK8T97N2F8G2y6bq64diVNxnxFd1v2o9Qqw7CJ1sQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
        },
        {
            "id": 8,
            "name": "Electric Toothbrush",
            "category": "Health & Personal Care",
            "brand": "Philips",
            "price": 29.99,
            "rating": 4.3,
            "imageUrl": "https://m.media-amazon.com/images/I/41zaQfZ0QtL.jpg"
        },
        {
            "id": 9,
            "name": "Backpack",
            "category": "Accessories",
            "brand": "North Face",
            "price": 79.99,
            "rating": 4.5,
            "imageUrl": "https://assets.thenorthface.com/images/t_img/c_pad,b_white,f_auto,h_906,w_780,e_sharpen:70/NF0A52SH4HF-HERO/NF0A52SH4HF-in-TNF-BlackTNF-Black.png"
        },
        {
            "id": 10,
            "name": "Smartwatch",
            "category": "Wearable Tech",
            "brand": "Apple",
            "price": 399.99,
            "rating": 4.7,
            "imageUrl": "https://allcell.am/wp-content/uploads/2022/11/71lG7br7k1L-1.jpg"
        },
        {
            "id": 11,
            "name": "Gaming Mouse",
            "category": "Electronics",
            "brand": "Logitech",
            "price": 59.99,
            "rating": 4.6,
            "imageUrl": "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg"
        },
        {
            "id": 12,
            "name": "4K Television",
            "category": "Electronics",
            "brand": "LG",
            "price": 999.99,
            "rating": 4.8,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjpWh8Lt_8xP7zxC6CYQeefy2L5hJRXIvkQ&s"
        },
        {
            "id": 13,
            "name": "Coffee Maker",
            "category": "Kitchen Appliances",
            "brand": "Keurig",
            "price": 129.99,
            "rating": 4.4,
            "imageUrl": "https://images.keurig.com/is/image/keurig/K-Duo-Single-Serve-Carafe-Coffee-Maker_5000204977?fmt=png-alpha"
        },
        {
            "id": 14,
            "name": "Electric Scooter",
            "category": "Transportation",
            "brand": "Xiaomi",
            "price": 349.99,
            "rating": 4.5,
            "imageUrl": "data:image/jpeg;base64,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"
        },
        {
            "id": 15,
            "name": "Wireless Earbuds",
            "category": "Electronics",
            "brand": "Apple",
            "price": 149.99,
            "rating": 4.7,
            "imageUrl": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg"
        },
        {
            "id": 16,
            "name": "Water Bottle",
            "category": "Outdoor & Sports",
            "brand": "Hydro Flask",
            "price": 39.99,
            "rating": 4.6,
            "imageUrl": "data:image/jpeg;base64,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"
        },
        {
            "id": 17,
            "name": "Yoga Mat",
            "category": "Fitness",
            "brand": "Manduka",
            "price": 89.99,
            "rating": 4.8,
            "imageUrl": "https://www.yogastudiowholesale.com/cdn/shop/files/ieajyckjijd.jpg?v=1697799006"
        },
        {
            "id": 18,
            "name": "Portable Charger",
            "category": "Electronics",
            "brand": "Anker",
            "price": 25.99,
            "rating": 4.5,
            "imageUrl": "https://m.media-amazon.com/images/I/61rYuLq0ruL.jpg"
        },
        {
            "id": 19,
            "name": "Instant Pot",
            "category": "Kitchen Appliances",
            "brand": "Instant Pot",
            "price": 99.99,
            "rating": 4.7,
            "imageUrl": "https://instantpot.com/cdn/shop/products/IB_112-0170-01_113-0059-01_Duo-V5-6QT-8QT_ATF_Square_Tile1.jpg?v=1707411077&width=2048"
        },
        {
            "id": 20,
            "name": "Hair Dryer",
            "category": "Beauty",
            "brand": "Dyson",
            "price": 299.99,
            "rating": 4.9,
            "imageUrl": "https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/7/9/797032.jpg"
        }
    ],

}

const ContentReducer = (state = InitialState, action) => {
    switch (action.type) {

        // case UPDATE_SORTING: {
        //     return {...state,sorting:action.sorting}
        // }

        default:
            return state;
    }
};

// export const UpdateSorting = (sorting) => ({type: UPDATE_SORTING, sorting});


export default ContentReducer