const shop = [
    {
      name: "javascript权威指南",
      price: 111.2,
      quantity: 0
    },
    {
      name: "深入浅出nodejs",
      price: 54.5,
      quantity: 0
    },
    {
      name: "你不知道的javascript 上卷",
      price: 34.5,
      quantity: 0
    },
    {
      name: "高性能JavaScript",
      price: 45.7,
      quantity: 0
    },
    {
      name: "JavaScript高级程序设计",
      price: 69,
      quantity: 0
    }
];
  
const vm = new Vue({
    el: "#app",
    data: {
        items: [],
        shop: shop,
        showCart: false,
        verified: false,
        len : 0,
        num : 0
    },
    computed: {
        total() {
            var total = 0;
                for(var i = 0; i < this.len; i++) {
                    total += this.items[i].price * this.items[i].quantity;
                }
            return total;
        }
    },
    methods: {
        addToCart(item) {
            this.len = this.items.length;
            item.quantity += 1;
            this.num += 1;
            for (let i = 0; i < this.len; i++) {
                if(this.items[i] === item) {
                    return;
                }
            }
            this.items.push(item);
        },
        removeFromCart(item) {
            this.num -= 1;
            item.quantity -= 1;
            if (item.quantity === 0) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    }
});