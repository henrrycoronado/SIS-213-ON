import OrderCard from '../components/OrderCard';
import Button from '../components/atoms/Button'

function Cart() {
  return (
    <div className="space-y-4 flex flex-col items-center mt-3">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <div className="flex flex-col items-center">
        <h3 className="text-xl m-2">Bs. 20</h3>{/*Precio total del producto*/}
        <Button text='continuar'/>
      </div>
    </div>
  );
}

export default Cart;
