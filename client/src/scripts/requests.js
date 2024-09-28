
import {API, ENDPOINT, store} from './constants.js';

export const sendRequest = async (url, method = "GET", options = {}) => {
    try {
        const response = await fetch(url, {
            method,
            ...options,
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};



export const loginAndGetToken = async (credentional) => {
    return await sendRequest(ENDPOINT.CUSTOMERS.LOGIN, 'POST', {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentional)
    })
}

export const registrateUser = (userData) => {
    return sendRequest(ENDPOINT.CUSTOMERS.REGISTER, 'POST', {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

}

export const registrateInit = async () => {
    const newUser = {
        firstName: "Customer",
        lastName: "Newone",
        login: "Customer",
        email: "customer@gmail.com",
        password: "1111111",
        isAdmin: true
    }
   const responce = await registrateUser(newUser)
   console.log(responce)
}

export const loginInit = async () => {
    const userData = {
        loginOrEmail: "customer@gmail.com",
        password: "1111111"
    };

    const {token} = await loginAndGetToken(userData)
    store.token = token
    store.user = userData
    console.log(store)
}




export const getProduct = async (newProduct) => {
    return sendRequest(ENDPOINT.PRODUCTS.ROOT, 'POST', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': store.token
        },
        body: JSON.stringify(newProduct)
    });
};


export const addProduct =  async () => {
    const newProduct = {
        name: "new product for testing purposes",
        currentPrice: 199.99,
        categories: "men",
        imageUrls: [
            "img/products/men/001.png",
            "img/products/men/002.png",
            "img/products/men/003.png",
            "img/products/men/004.png"
        ],
        quantity: 100,
    };

    const data = await getProduct(newProduct)
    console.log(data)
}



// export const getAllProducts = async () => {
//
//     return sendRequest(`${API}${ENDPOINT.PRODUCTS.ROOT}?limit=0`)
// }
// //по идее сюда тоже логику с пагинацией нужно
// const searchProducts = async (item, ) => {
//     return await sendRequest(`${API}${ENDPOINT.PRODUCTS.SEARCH}${item}`)
// }
//
// //getAllUsers тоже пагинация
//
// const loginUser = async (username, password) => {
//     const loginDetails = {
//         username,
//         password,
//         expiresInMins: 30,
//     };
//
//     return await sendRequest(`${API}${ENDPOINT.USERS.LOGIN}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginDetails),
//     });
// };

// getAllProducts().then(products => {
//     console.log("Products on page 1:", products);
// });



