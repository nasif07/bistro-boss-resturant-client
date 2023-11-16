import FoodCart from "../../../components/foodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 space-y-6">
            {
                items.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;