import { ShoppingCart } from 'shared/shopping-cart';


export class Order {
    datePlaced: number;
    items: any[];
    shippingFee: number=0;
    sumPrice: number=0;

    constructor(public userId: string, public shipping: any, cart: ShoppingCart){
        this.datePlaced = new Date().getTime();
        this.items = cart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
        for(let item of this.items){
          this.sumPrice += item.totalPrice;
        }
        if ( this.sumPrice >= 2500) this.shippingFee = 0;
        else{
          this.shippingFee = 250;
          this.sumPrice += this.shippingFee;
        }
    }

}