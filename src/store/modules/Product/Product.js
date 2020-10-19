import Axios from 'axios'

const initialState = () => {
    return {
        products: [],
        product: {
            categories: []
        },
    }
}

export default {
    state: initialState(),
    mutations: {
        UPDATE_PRODUCT(state, product) {
            state.product = product
        },
        UPDATE_PRODUCT_LIST(state, products) {
            state.products = products
        },
        RESET_STATE(state) {
            Object.assign(state, initialState())
        }
    },
    actions: {
        getProducts({commit}) {
            return new Promise(function(resolve, reject){
                Axios.get('api/products')
                .then((response) => {
                    commit('UPDATE_PRODUCT_LIST', response.data.data)
                    resolve(response)
                })
                .catch((err) => reject(err))
            });
        },
        getProduct({commit}, id) {
            return new Promise((resolve, reject) => {
                Axios.get(`api/products/${id}`)
                    .then((response) => {
                        commit('UPDATE_PRODUCT', response.data.data)
                        resolve(response)
                    })
                    .catch((err) => reject(err))
            })
        },
        deleteProduct({commit}, id) {
            return new Promise((resolve, reject) => {
                Axios.delete(`api/products/${id}`)
                .then((response) => {
                    commit('RESET_STATE')
                    resolve(response)
                })
                .catch((err) => reject(err))
            })
        }
    },
    getters: {
        productsFormated({products}) {
            return products.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    qtd_in_stock: product.qtd_in_stock,
                    price: product.price,
                    categories: product.categories.map((category) => category.name).join(', '),
                }
            })
        },
        productFormated({product}) {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                qtd_in_stock: product.qtd_in_stock,
                price: product.price,
                categories: product.categories.map((category) => category.name).join(', '),
            }
        }
    }
}