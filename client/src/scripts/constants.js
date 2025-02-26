export const API = '//localhost:4000/api'

export const store = {
    token: null,
    user: {
        isLogin: false,
        token: null,
        userInfo: null,
    },
    topSellers: null,

    cart: {
        products: [],
        totalPrice: 0,
        quantity: 0,
    },
}

export const ENDPOINT = Object.freeze({
    PRODUCTS: {
        ROOT: `${API}/products`,
    },

    CUSTOMERS: {
        LOGIN: `${API}/customers/login`,
        REGISTER: `${API}/customers`,
        PASSWORD: `${API}/customers/password`,
        UPDATE_CART_ON_SERVER: `${API}/cart`,
        DECREASE_PRODUCT_QUANTITY: `${API}/cart/product/`,
        ADD_TO_CART_PRODUCT: `${API}/cart/`,
        DELETE_PRODUCT_FROM_CART : `${API}/cart/`,
        GET_CART:`${API}/cart/`,
        CREATE_CART: `${API}/cart/`,

    },


    // PRODUCTS: {
    //   ROOT: "/products",
    //   SEARCH: "/products/search?q=",
    //   CATEGORIES: "/products/categories",
    //   CATEGORY_LIST: "/products/category-list",
    //   CATEGORY: "/products/category/",
    //   ADD: "/products/add",
    // },
    // CARTS: {
    //   WARP: "/carts",
    //   BY_USER: "/carts/user/",
    //   ADD_NEW: "/carts/add",
    //   UPDATE: "/carts/",
    //   DELETE: "/carts/",
    // },
    // USERS: {
    //   SOURCE:"/users",
    //   LOGIN: "/user/login",
    //   CURRENT: "/user/me",
    //   SINGLE: "/users/",
    //   SEARCH_USERS: "/users/search?q=",
    //   CARTS_BY_USER: "/users/ /carts",
    // },
    // AUTH: {
    //   CORE: "/auth",
    //   LOGIN: "/auth/login",
    //   CURRENT_AUTH: "/auth/me",
    //   REFRESH_AUTH_SESSION: "auth/refresh"
    //
    // },

});

export const modalWindowPosition = {
    right: "right",
    center: "center",
};
