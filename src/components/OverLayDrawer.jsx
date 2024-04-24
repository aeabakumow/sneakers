function OverLayDrawer({onClose, zalupa = []}) {
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

        <div className="items flex">
          {zalupa.map((obj) => (
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
    </div>
  );
}

export default OverLayDrawer;
