import React from "react";
import axios from "axios";
import Info from "./info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function OverLayDrawer({ onClose, onRemove, basket = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://662b9d6cde35f91de158e41b.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://662b9d6cde35f91de158e41b.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Error when creating an order");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between ">
          Pannier
          <img
            onClick={onClose}
            className="cu-p"
            src="src\assets\btn-remove.svg"
            alt="Close"
          />
        </h2>

        {basket.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {basket.map((obj) => (
                // eslint-disable-next-line react/jsx-key
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="src\assets\btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>214,98$</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>10,74$</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Checkout <img src="src\assets\arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Order is processed" : "Cart is empty"}
            description={
              isOrderCompleted
                ? `Your order # ${orderId} will soon be transferred to courier delivery`
                : "Add at least one pair of sneakers to complete your order"
            }
            image={
              isOrderCompleted
                ? "src/assets/complete-order.jpg"
                : "src/assets/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default OverLayDrawer;
