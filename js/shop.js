        //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

        let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
        let PRICES = [100, 120, 1000, 15, 18]
        let IDS = [0, 1, 2, 3, 4]

        let products = [] //массив объектов
        
        let cart = {
            items: [],
            total: 0,
            add: addProduct
        }

        function getData () {
            for (let i = 0; i < IDS.length; i++) {
                products.push (createNewProduct (i))
            }
        }

        function createNewProduct (index) {
            return {
                product_name: PRODUCTS_NAMES [index],
                price: PRICES [index],
                product_id: IDS [index]
            }
        }

        function addProduct (id) {
            let find = products.find (el => el.product_id === id)
            cart.items.push (Object.assign ({}, find, {quantity: 1}))
            sumItems()
        }

        function sumItems () {
            let sum = 0;
            for (let i = 0; i < cart.items.length; i++){
                let price = cart.items[i].price;
                let quantity = cart.items[i].quantity
                sum += price * quantity;
            } return console.log(sum)
        }

getData()