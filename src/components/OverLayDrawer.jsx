function OverLayDrawer({ onClose, onRemove, basket = [] }) {
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
          <div>
            {" "}
            <div  className="items flex">
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
              <button className="greenButton">
                Checkout <img src="src\assets\arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="src\assets\empty-cart.jpg"
              alt="Empty"
            />
            <h2>Cart is empty</h2>
            <p className="opacity-6">
              Add at least one pair of sneakers to complete your order.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="src\assets\arrow.svg" alt="Arrow" />
              Hark back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OverLayDrawer;
